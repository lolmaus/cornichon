import Component from '@ember/component'
import { inject as service } from '@ember/service'



export default Component.extend({
  file       : null,
  isEditable : false,

  dialogs : service(),

  classNames        : ['featureFile'],
  classNameBindings : ['file.hasDirtyFields:-dirty:-clean'],

  actions : {
    revert () {
      this.dialogs.confirm({
        message  : 'Revert edits to feature?',
        actionOk : () => { this.file.resetEditabeFields() },
      })
    },

    setAll (value) {
      this.file.setAll(value)
    },

    toggleScenario (scenario) {
      scenario.toggleProperty('isExpanded')
    },
  },
})
