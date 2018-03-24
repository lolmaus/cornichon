import Component from '@ember/component'

import reads from 'ember-macro-helpers/reads'



export default Component.extend({

  isAuthenticating  : null,
  isAuthenticated   : null,
  loginToggleAction : null,



  classNames : ['loginButton'],
  tagName    : 'button',
  disabled   : reads('isAuthenticating'),

  click () {
    this.loginToggleAction()
  },

})
