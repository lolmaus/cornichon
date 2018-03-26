import Component from '@ember/component'

import EditableFieldComponentMixin from 'cornichon/mixins/editable-field-component'



export default Component.extend(EditableFieldComponentMixin, {
  classNames : ['editableInput'],
})
