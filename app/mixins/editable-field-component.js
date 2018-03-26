import Mixin from '@ember/object/mixin'
import {later, next} from '@ember/runloop'
import {inject as service} from '@ember/service'

import {and, getBy, eq, or} from 'ember-awesome-macros'
import {trim} from 'ember-awesome-macros/string'
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'

import {keyUserInput, keyIsValid, keyIsDirty} from 'cornichon/utils/editable-fields'



export default Mixin.create({
  obj        : null,
  key        : null,
  isEditable : true,

  dialogs : service(),

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
        this.send('toggleEditing', false)
      }
    },

    cancelEditingOnCtrlEnter (event) {
      if (event.ctrlKey && event.which === 13) { // Ctrl-Enter
        event.preventDefault()
        this.send('toggleEditing', false)
      }
    },

    revert () {
      this
        .dialogs
        .confirm({message : 'Revert changes to this field?'})
        .then(() => {
          this.obj.resetEditabeField({key : this.key})
        })
    },

    toggleEditing (state = !this.isEditing) {
      if (state && !this.isEditable) return

      this.set('isEditing', state)
      if (state) next(() => this.$('.editableField-content').focus())
    },

    delayedToggleEditing (...args) {
      later(() => this.send('toggleEditing', ...args), 250)
    },

    userInput (value) {
      this.obj.set(this.userInputKey, value)
    },
  },
})
