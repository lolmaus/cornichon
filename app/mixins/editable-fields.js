import { isArray } from '@ember/array'
import {defineProperty} from '@ember/object'
import Mixin from '@ember/object/mixin'

import {notEqual, or} from 'ember-awesome-macros'
import {isAny} from 'ember-awesome-macros/array'
// import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'
import reads from 'ember-macro-helpers/reads'

import {keyUserInput, keyIsDirty} from 'cornichon/utils/editable-fields'



export default Mixin.create({
  editableFields         : [],
  editableChildren       : [],
  editableChildrenArrays : [],

  hasDirtyFieldsOwn            : null, // Overridden in init
  hasDirtyFieldsChildren       : null, // Overridden in init
  hasDirtyFieldsChildrenArrays : null, // Overridden in init

  hasDirtyFields : or(
    'hasDirtyFieldsOwn',
    'hasDirtyFieldsChildren',
    'hasDirtyFieldsChildrenArrays',
  ),



  resetEditabeField ({
    key,
    userInputKey   = keyUserInput(key),
    obj            = this,
    value          = this[key],
    userInputValue = this[userInputKey],
  }) {
    defineProperty(obj, userInputKey, reads(key))
    if (value !== userInputValue) obj.notifyPropertyChange(userInputKey)
    return userInputValue
  },



  resetEditabeFields () {
    return this.reduceEditableFields(params => this.resetEditabeField(params))
  },



  applyEditableFields () {
    return this.reduceEditableFields(({key, userInputKey, value, userInputValue, obj}) => {
      if (isArray(userInputValue)) userInputValue = userInputValue.toArray()
      obj.set(key, userInputValue)

      this.resetEditabeField({key, userInputKey, value, userInputValue, obj})
      return userInputValue
    })
  },



  setEditableFields (payload) {
    return this.reduceEditableFields(({key, userInputKey}) => {
      return this.set(userInputKey, payload[key])
    })
  },



  reduceEditableFields (callback = ({userInputValue}) => userInputValue, payload) {
    const result = {}

    this.editableFields.forEach(key => {
      const userInputKey = keyUserInput(key)

      result[key] = callback({
        key,
        userInputKey,
        value          : this[key],
        userInputValue : this[userInputKey],
        obj            : this,
        payload,
      })
    })

    this.editableChildren.forEach(key => {
      const payloadFragment = payload && payload[key]
      result[key] = this[key].reduceEditableFields(callback, payloadFragment)
    })

    this.editableChildrenArrays.forEach(key => {
      result[key] = this[key].map((child, i) => {
        const payloadFragment = payload && payload[key] && payload[key][i]
        return child.reduceEditableFields(callback, payloadFragment)
      })
    })

    return result
  },



  init () {
    this._super(...arguments)

    this.resetEditabeFields()

    /* Dirty keys */
    const dirtyKeysOwn = this.editableFields.map(keyIsDirty)
    dirtyKeysOwn.forEach((dirtyKey, i) => {
      const key = this.editableFields[i]
      defineProperty(this, dirtyKey, notEqual(key, keyUserInput(key)))
    })

    /* hasDirtyFieldsOwn */
    defineProperty(this, 'hasDirtyFieldsOwn', or(...dirtyKeysOwn))

    /* hasDirtyFieldsChildren */
    const editableChildrenKeys = this.editableChildren.map(key => `${key}.hasDirtyFields`)
    defineProperty(this, 'hasDirtyFieldsChildren', or(...editableChildrenKeys))

    /* hasDirtyFieldsChildrenArrays */
    const childrenArraysCPs = this.editableChildrenArrays.map(key => isAny(key, raw('hasDirtyFields'), true))
    defineProperty(this, 'hasDirtyFieldsChildrenArrays', or(...childrenArraysCPs))
  },
})
