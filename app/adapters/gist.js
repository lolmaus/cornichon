import RESTAdapter from 'ember-data/adapters/rest'
import computed from 'ember-macro-helpers/computed'

export default RESTAdapter.extend({

  host : 'https://api.github.com',

  headers : computed(function () {
    return {
      Accept : 'application/vnd.github.v3+json',
    }
  }),

})
