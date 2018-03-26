import Component from '@ember/component'
import { observer } from '@ember/object'
import { next } from '@ember/runloop'

import AutoresizeMixin from 'ember-autoresize/mixins/autoresize'
import computed from 'ember-macro-helpers/computed'
import reads from 'ember-macro-helpers/reads'

import EditableFieldComponentMixin from 'cornichon/mixins/editable-field-component'



export default Component.extend(EditableFieldComponentMixin, AutoresizeMixin, {
  classNames : ['editableTextarea'],

  autoresize                 : reads('isEditing'),
  autoresizeElementDidChange : null,
  shouldResizeHeight         : true,
  significantWhitespace      : true,

  autoResizeText : computed('userInputValue', value => (value || '') + '@'),

  applyAutoresize : observer('isEditing', function () {
    next(() => {
      const autoresizeElement = this.$('.editableTextarea-input').get(0)
      this.setProperties({autoresizeElement})
    })
  }),

  fontFamilyLoaded : observer('autoresizeElement', function () {
    if (!this.autoresizeElement) return
    this._super()
  }),
})
