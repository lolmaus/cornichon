import Component from '@ember/component'
import {inject as service} from '@ember/service'

import {and, getBy, eq, or} from 'ember-awesome-macros'
import {trim} from 'ember-awesome-macros/string'
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'

import {keyUserInput, keyIsValid, keyIsDirty} from 'cornichon/utils/editable-fields'



export default Component.extend({
  obj        : null,
  key        : null,
  isEditable : true,

  dialogs : service(),

  classNames        : ['editableField'],
  classNameBindings : ['isEditing:-edting', 'isEditable:-editable:-disabled'],

  isEditing : false,

  userInputKey       : computed('key', keyUserInput),
  userInputValue     : getBy('obj', 'userInputKey'),
  isEmpty            : eq(trim('userInputValue'), raw('')),
  isEditingEffective : or('isEditing', and('isEditable', 'isEmpty')),
  isUserInputValid   : getBy('obj', computed('key', keyIsValid)),
  isDirty            : getBy('obj', computed('key', keyIsDirty)),

  actions : {
    cancelEditingOnEnter (event) {
      if (event.which === 13) { // Enter
        event.preventDefault()
        this.send('toggleEditing')
      }
    },

    revert () {
      this
        .dialogs
        .confirm({message : 'Revert changes to this field?'})
        .then(() => this.obj.resetEditabeField({key : this.key}))
    },

    toggleEditing (state = !this.isEditing) {
      if (state && !this.isEditable) return

      this.set('isEditing', state)
    },

    userInput (value) {
      this.obj.set(this.userInputKey, value)
    },
  },
})
