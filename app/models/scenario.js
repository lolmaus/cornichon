import {bool} from '@ember/object/computed'

import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'
import {array} from 'ember-data-model-fragments/attributes'



export default Fragment.extend({
  name        : attr('string'),
  content     : attr('string'),
  comments    : attr('string'),
  annotations : array('string'),

  isExpanded : false,

  isExpandable : bool('content.length'),
})
