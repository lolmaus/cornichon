import Component from '@ember/component'

import {and, getBy, eq, or} from 'ember-awesome-macros'
import {trim} from 'ember-awesome-macros/string'
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'

import {keyUserInput} from 'cornichon/utils/editable-fields'



export default Component.extend({
  obj        : null,
  key        : null,
  isEditable : true,

  classNames        : ['editableField'],
  classNameBindings : ['isEditing:-edting', 'isEditable:-editable:-disabled'],

  isEditing : false,

  userInputKey       : computed('key', keyUserInput),
  userInputValue     : getBy('obj', 'userInputKey'),
  isEmpty            : eq(trim('userInputValue'), raw('')),
  isEditingEffective : or('isEditing', and('isEditable', 'isEmpty')),

  actions : {
    cancelEditingOnCtrlEnter (event) {
      if (event.ctrlKey && event.which === 13) { // Enter
        event.preventDefault()
        this.send('toggleEditing')
      }
    },

    toggleEditing (state = !this.isEditing) {
      if (state && !this.isEditable) return

      this.set('isEditing', state)
    },

    userInput (value) {
      this.obj.set(this.newKey, value)
    },
  },
})
