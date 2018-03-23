import Controller from '@ember/controller'

import reads from 'ember-macro-helpers/reads'

export default Controller.extend({
  model : null,

  gist : reads('model.gist'),

  actions : {
    setAll (value) {
      this.gist.setAll(value)
    },
  },
})
