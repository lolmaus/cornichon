import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'



export default Fragment.extend({
  message : attr('string'),
  line    : attr('number'),
})
