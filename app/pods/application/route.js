import { getOwner } from '@ember/application'
import Route from '@ember/routing/route'
import {inject as service} from '@ember/service'
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin'



export default Route.extend(ApplicationRouteMixin, {
  config : service(),

  sessionAuthenticated () {
    const attemptedTransition = this.get('session.attemptedTransition')
    const cookies = getOwner(this).lookup('service:cookies')
    const redirectTarget = cookies.read('ember_simple_auth-redirectTarget')

    if (attemptedTransition) {
      attemptedTransition.retry()
      this.set('session.attemptedTransition', null)
    } else if (redirectTarget) {
      this.transitionTo(redirectTarget)
      cookies.clear('ember_simple_auth-redirectTarget')
    }
  },

  sessionInvalidated () {
    if (!this.config.isTest && !this.get('_isFastBoot')) window.location.reload()
  },
})
