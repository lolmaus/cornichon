import {bool} from '@ember/object/computed'

import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'
import {array} from 'ember-data-model-fragments/attributes'

import EditableFieldsMixin from 'cornichon/mixins/editable-fields'



export default Fragment.extend(EditableFieldsMixin, {
  name        : attr('string'),
  content     : attr('string'),
  comments    : attr('string'),
  annotations : array('string'),

  editableFields : [
    'name',
    'content',
    'comments',
    'annotations',
  ],

  isExpanded : false,

  isExpandable : bool('content.length'),
})
