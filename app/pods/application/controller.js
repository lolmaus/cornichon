import Controller from '@ember/controller'
import {inject as service} from '@ember/service'

import { task } from 'ember-concurrency'



export default Controller.extend({
  session : service(),

  loginTask : task(function * () {
    return yield this.session.authenticate('authenticator:torii', 'github-oauth2')
  }),

  actions : {
    logout () {
      this.session.invalidate()
    },
  },
})
