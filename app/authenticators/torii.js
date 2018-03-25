import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii'
import {inject as service} from '@ember/service'
import fetch from 'cornichon/utils/fetch-rsvp'
import fetchGithub from 'cornichon/utils/fetch-github'
import RSVP from 'rsvp'



export default ToriiAuthenticator.extend({

  // ----- Services -----
  config : service(),
  torii  : service(),



  // ----- Overridden methods -----
  authenticate (provider, options = {}) {
    this._assertToriiIsPresent()

    const gatekeeperUrl = this.config.gatekeeperUrl

    return this
      .torii

      // Open popup with GitHub Auth
      .open(provider, options)

      // Retrieve GitHub token using authorizationCode
      .then(response => {
        const url = `${gatekeeperUrl}/authenticate/${response.authorizationCode}`
        return fetch(url)
      })

      // Fail if HTTP code is ok but payload contains error
      .then(data => {
        return data.error
          ? RSVP.reject(data)
          : {...data, analConsent : options.analConsent}
      })

      // Required by ToriiAuthenticator
      .then(data => {
        this._authenticateWithProvider(provider, data)
        return data
      })

      // Retrieve user
      .then(data => RSVP.hash({
        data,
        user : fetchGithub('user', data.token),
      }))
      .then(({data, user}) => ({...data, user}))
  },
})
