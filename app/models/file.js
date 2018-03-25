import attr from 'ember-data/attr'
import Fragment from 'ember-data-model-fragments/fragment'
import {array, fragmentArray} from 'ember-data-model-fragments/attributes'

import {and, equal} from 'ember-awesome-macros'
import {isAny, filterBy} from 'ember-awesome-macros/array'
import computed from 'ember-macro-helpers/computed'
import raw from 'ember-macro-helpers/raw'

import bool from 'cornichon/macros/bool'
import EditableFieldsMixin from 'cornichon/mixins/editable-fields'



export default Fragment.extend(EditableFieldsMixin, {
  filename  : attr('string'),
  size      : attr('number'),
  rawUrl    : attr('string'),
  type      : attr('string'),
  language  : attr('string'),
  truncated : attr('boolean'),
  content   : attr('string'),

  feature     : attr('string'),
  comments    : attr('string'),
  annotations : array('string'),
  scenarios   : fragmentArray('scenario'),
  errors      : fragmentArray('error'),

  editableFields : [
    'filename',
    'feature',
    'comments',
    'annotations',
  ],

  editableChildrenArrays : [
    'scenarios',
  ],

  extension           : computed('filename', filename => filename.split('.').get('lastObject')),
  isFeature           : equal('extension', raw('feature')),
  expandableScenarios : filterBy('scenarios', raw('isExpandable'), true),
  isExpandable        : and('isFeature',  bool('expandableScenarios.length')),

  areAnyScenariosExpandable          : isAny('scenarios', raw('isExpandable'), true),
  areAnyExpandableScenariosExpanded  : isAny('expandableScenarios', raw('isExpanded'), true),
  areAnyExpandableScenariosCollapsed : isAny('expandableScenarios', raw('isExpanded'), false),

  setAll (value) {
    this.scenarios.forEach(scenario => {
      if (scenario.content.length) scenario.set('isExpanded', value)
    })
  },
})
