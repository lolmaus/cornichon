import Service, {inject as service} from '@ember/service'
import fetchGithub from 'cornichon/utils/fetch-github'



export default Service.extend({
  session : service(),
  store   : service(),

  clone (gist) {
    if (gist.hasDirtyFields) throw new Error("Can't clone a dirty gist")

    const payload = gist.reduceEditableFields()

    return this
      .store
      .createRecord('gist', payload)
      .save()
  },

  fork (id) {
    const url = `gists/${id}/forks`

    return fetchGithub(url, this.session, {method : 'POST'})
  },
})
