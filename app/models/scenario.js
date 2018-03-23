import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'
import {array} from 'ember-data-model-fragments/attributes'



export default Fragment.extend({
  name        : attr('string'),
  content     : attr('string'),
  annotations : array('string'),

  isExpanded : false,
})
