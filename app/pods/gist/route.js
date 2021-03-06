import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({

  model ({gistId}) {
    return RSVP.hash({
      gistId,
      gist : this.store.findRecord('gist', gistId),
    })
  },
})
