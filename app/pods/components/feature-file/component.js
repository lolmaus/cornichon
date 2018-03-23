import Component from '@ember/component'



export default Component.extend({
  file : null,

  classNames : ['featureFile'],

  actions : {
    setAll (value) {
      this.file.setAll(value)
    },

    toggleScenario (scenario) {
      scenario.toggleProperty('isExpanded')
    },
  },
})
