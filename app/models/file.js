import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'
import {array, fragmentArray} from 'ember-data-model-fragments/attributes'

import {any} from 'ember-awesome-macros/array'
import computed from 'ember-macro-helpers/computed'



export default Fragment.extend({
  filename  : attr('string'),
  size      : attr('number'),
  rawUrl    : attr('string'),
  type      : attr('string'),
  language  : attr('string'),
  truncated : attr('boolean'),
  content   : attr('string'),

  feature     : attr('string'),
  annotations : array('string'),
  scenarios   : fragmentArray('scenario'),
  errors      : fragmentArray('error'),

  isFeature : computed('feature', feature => feature && !!feature.split('.').get('lastObject')),

  doAnyScenariosHaveContent : any('scenarios.@each.content',    scenario => !!scenario.content.length),
  areAnyScenariosExpanded   : any('scenarios.@each.isExpanded', scenario =>   scenario.isExpanded),
  areAnyScenariosCollapsed  : any('scenarios.@each.isExpanded', scenario =>  !scenario.isExpanded),

  setAll (value) {
    this.scenarios.forEach(scenario => {
      if (scenario.content.length) scenario.set('isExpanded', value)
    })
  },
})
