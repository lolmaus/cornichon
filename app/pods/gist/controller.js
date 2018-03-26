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
  session : service(),

  gist : reads('model.gist'),

  isEditing : false,

  isEditable : and(
    'gist.isOwn',
    not('forkTask.isRunning'),
    not('cloneTask.isRunning'),
    not('saveTask.isRunning'),
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
    const gist    = this.gist
    const payload = gist.applyEditableFields()

    return yield gist
      .save()
      .catch(() => {
        gist.rollbackAttributes()
        gist.setEditableFields(payload)
      })
  }),

  actions : {
    startEditing () {
      if (!this.isEditable) throw new Error("Can't start editing")
      this.set('isEditing', true)
    },

    cancelEditing () {
      if (this.gist.hasDirtyFields) throw new Error("Can't cancel editing when gist is dirty")
      this.set('isEditing', false)
    },

    revert () {
      if (!this.isEditable) return

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
