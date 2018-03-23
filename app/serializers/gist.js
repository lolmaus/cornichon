import { camelize, underscore } from '@ember/string'

import JSONSerializer from 'ember-data/serializers/json'

import _ from 'lodash'



export default JSONSerializer.extend({
  keyForAttribute (attr, method) {
    return underscore(attr)
  },

  normalize (typeClass, payload) {
    payload.files = _.map(payload.files, (file, filename) => {
      file = _.mapKeys(file, (value, key) => camelize(key))

      file.filename = filename

      if (file.filename.split('.').lastObject === 'feature') {
        const {
          feature,
          annotations,
          scenarios,
        } = this._generateFeature(file.content)

        file.feature     = feature
        file.annotations = annotations
        file.scenarios   = scenarios
      }

      return file
    })

    const result = this._super(typeClass, payload)

    console.log('normalize', result)

    return result
  },

  _generateFeature (content) {
    let featureName
    const featureAnnotations = []

    let currentScenarioName
    let currentScenarioContent = ''
    let currentScenarioAnnotations = []

    const scenarios = []
    const errors = []

    content
      .split("\n")
      .forEach((line, i) => {
        if (this._isEmptyLine(line)) return

        const indentation = this._indentation(line)

        if (indentation === 0) {
          const isAnnotation = this._isAnnotation(line)

          if (isAnnotation) {
            if (featureName) {
              errors.push({
                message : "Unexpected root-level annotation",
                line    : i,
              })
              return
            }

            featureAnnotations.push(line)
          } else if (this._isFeature(line)) {
            if (featureName) {
              errors.push({
                message : "Expected one feature per file",
                line    : i,
              })
              return
            }

            featureName = line
          }
        } else if (indentation === 2) {
          if (!featureName) {
            errors.push({
              message : `Unexpected indentation of 2 without a feature`,
              line    : i,
            })
            return
          }

          // Wrapping up previous scenario
          if (currentScenarioName) {
            scenarios.push({
              name        : currentScenarioName,
              content     : currentScenarioContent,
              annotations : currentScenarioAnnotations,
            })

            currentScenarioName        = null
            currentScenarioContent     = ''
            currentScenarioAnnotations = []
          }

          if (this._isAnnotation(line)) {
            currentScenarioAnnotations.push(line.trim())
          } else {
            currentScenarioName = line.trim()
          }
        } else if (indentation >= 4) {
          if (!currentScenarioName) {
            errors.push({
              message : `Unexpected indentation of ${indentation} without a scenario`,
              line    : i,
            })
            return
          }

          if (currentScenarioContent.length) currentScenarioContent += "\n"
          currentScenarioContent += line.slice(4)
        } else {
          errors.push({
            message : `Unexpected indentation of ${indentation}`,
            line    : i,
          })
        }
      })

      // Wrapping up last scenario
    if (currentScenarioName) {
      scenarios.push({
        name        : currentScenarioName,
        content     : currentScenarioContent,
        annotations : currentScenarioAnnotations,
      })
    }

    return {
      feature     : featureName,
      annotations : featureAnnotations,
      scenarios,
      errors,
    }
  },

  _isAnnotation (line) {
    return line.trim()[0] === '@'
  },

  _isEmptyLine (line) {
    const trimmedLine = line.trim()
    return !trimmedLine.length || trimmedLine[0] === '#'
  },

  _isFeature (line) {
    return /^Feature: /.test(line)
  },

  _indentation (line) {
    return line.match(/^( *)/)[0].length
  },
})
