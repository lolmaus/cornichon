import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

import {and, not} from 'ember-awesome-macros'
import {task} from 'ember-concurrency'
import reads from 'ember-macro-helpers/reads'

import RSVP from 'rsvp'



export default Controller.extend({
  model : null,

  fetch   : service(),
  dialogs : service(),
  router  : service(),

  gist : reads('model.gist'),

  isFormEditable : and(
    'gist.isOwn',
    not('forkTask.isRunning'),
    not('cloneTask.isRunning'),
  ),

  cloneTask : task(function * () {
    return yield this
      .fetch
      .clone(this.gist)
      .then(gist => this.router.transitionTo('gist', gist.id))
  }),

  forkTask : task(function * () {
    const confirmationPromise =
      this.gist.hasDirtyFields
        ? this.dialogs.confirm({message : 'This epic unsaved changes. Fork unsaved version and lose changes?'})
        : RSVP.resolve()

    return yield confirmationPromise
      .then(() => this.fetch.fork(this.gist.id))
      .then(({id}) => this.router.transitionTo('gist', id))
  }),

  saveTask : task(function * () {
    if (!this.isFormEditable) return
    this.gist.applyEditableFields()
    return yield this.gist.save()
  }),

  actions : {
    revert () {
      if (!this.isFormEditable) return

      this
        .dialogs
        .confirm({ message : 'Revert edits to all features?' })
        .then(() => this.gist.resetEditabeFields())
    },

    setAll (value) {
      this.gist.setAll(value)
    },
  },
})
