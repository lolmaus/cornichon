import { underscore } from '@ember/string'

import JSONSerializer from 'ember-data/serializers/json'

import _ from 'lodash'

import camelizeKeys from 'cornichon/utils/camelize-keys'
import padLinesLeft from 'cornichon/utils/pad-lines-left'



export default JSONSerializer.extend({
  keyForAttribute (attr, method) {
    return underscore(attr)
  },

  normalize (typeClass, payload) {
    payload.files = _.map(payload.files, (file, filename) => {
      file = camelizeKeys(file)

      file.filename = filename

      if (file.filename.split('.').lastObject === 'feature') {
        const {
          feature,
          annotations,
          scenarios,
          comments,
          errors,
        } = this._generateFeature(file.content)

        file.feature     = feature
        file.annotations = annotations
        file.scenarios   = scenarios
        file.comments    = comments
        file.errors      = errors
      }

      return file
    })

    payload.owner        = camelizeKeys(payload.owner)
    payload.owner.userId = payload.owner.id
    delete payload.owner.id

    return this._super(typeClass, payload)
  },

  serialize (snapshot, options) {
    const payload = {}

    const changedAttrs = snapshot.record.changedAttributes()

    if (changedAttrs.description) {
      payload.description = changedAttrs.description[1]
    }

    if (changedAttrs.files) {
      const oldFiles =
        changedAttrs
          .files
          .firstObject
          .reduce((result, {filename}) => {
            return {...result, [filename] : null}
          }, {})

      const newFiles =
        snapshot
          .record
          .files
          .toArray()
          .reduce((result, {content, filename}) => {
            return {...result, [filename] : {content}}
          }, {})

      payload.files = {...oldFiles, ...newFiles}

      this._serializeFeatures({payload, record : snapshot.record})
    }

    return payload
  },

  _generateFeature (content) {
    let featureName
    let featureComments = ''
    const featureAnnotations = []

    let currentScenarioName
    let currentScenarioComments = ''
    let currentScenarioContent = ''
    let currentScenarioAnnotations = []

    const scenarios = []
    const errors = []

    content
      .split("\n")
      .forEach((line, i) => {
        if (this._isEmptyLine(line)) {
          if (currentScenarioName) currentScenarioContent += "\n"
          return
        }

        const indentation = this._indentation(line)

        // FEATURE
        if (indentation === 0) {
          if (this._isAnnotation(line)) {
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
          } else if (this._isComment(line)) {
            if (featureName) {
              errors.push({
                message : "Encountered root comment after feature",
                line    : i,
              })
              return
            }

            if (featureComments.length) featureComments += "\n"
            featureComments += line.trim()
          }

        // SCENARIO
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
              content     : currentScenarioContent.trim(),
              annotations : currentScenarioAnnotations,
              comments    : currentScenarioComments,
            })

            currentScenarioName        = null
            currentScenarioContent     = ''
            currentScenarioComments    = ''
            currentScenarioAnnotations = []
          }


          if (this._isAnnotation(line)) {
            currentScenarioAnnotations.push(line.trim())
          } else if (this._isComment(line)) {
            if (currentScenarioComments.length) currentScenarioComments += "\n"
            currentScenarioComments += line.trim()
          } else {
            currentScenarioName = line.trim()
          }

        // CONTENT
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
        content     : currentScenarioContent.trim(),
        annotations : currentScenarioAnnotations,
        comments    : currentScenarioComments,
      })
    }

    return {
      feature     : featureName,
      annotations : featureAnnotations,
      comments    : featureComments,
      scenarios,
      errors,
    }
  },

  _isAnnotation (line) {
    return line.trim()[0] === '@'
  },

  _isComment (line) {
    return line.trim()[0] === '#'
  },

  _isEmptyLine (line) {
    return !line.trim().length
  },

  _isFeature (line) {
    return /^Feature: /.test(line)
  },

  _indentation (line) {
    return line.match(/^( *)/)[0].length
  },

  _serializeFeatures ({payload, record}) {
    record.featureFiles.forEach(file => {
      let content = ''

      if (file.comments) content = file.comments + "\n\n"

      if (file.annotations) {
        file.annotations.toArray().forEach(annotation => {
          content += annotation + "\n"
        })
      }

      content += file.feature

      file.scenarios.forEach(scenario => {
        content += "\n\n\n\n"

        if (scenario.comments) content += padLinesLeft(scenario.comments, "  ") + "\n\n"

        if (scenario.annotations) {
          scenario.annotations.forEach(annotation => {
            content += "  " + annotation + "\n"
          })
        }

        content += padLinesLeft(scenario.name, "  ")

        if (scenario.content) content += "\n" + padLinesLeft(scenario.content, "    ")
      })

      payload.files[file.filename] = { content }
    })
  },
})
