import {inject as service} from '@ember/service'

import RESTAdapter from 'ember-data/adapters/rest'

import AdapterFetch from 'ember-fetch/mixins/adapter-fetch'
import computed from 'ember-macro-helpers/computed'

export default RESTAdapter.extend(AdapterFetch, {
  session : service(),

  host : 'https://api.github.com',

  headers : computed(function () {
    const token = this.get('session.data.authenticated.token')

    return {
      Accept        : 'application/vnd.github.v3+json',
      Authorization : token && `token ${token}`,
    }
  }),

  updateRecord (store, type, snapshot) {
    const data = {}
    const serializer = store.serializerFor(type.modelName)

    serializer.serializeIntoHash(data, type, snapshot)

    const url = this.buildURL(type.modelName, snapshot.id, snapshot, 'updateRecord')

    return this.ajax(url, "PATCH", { data })
  },

})
