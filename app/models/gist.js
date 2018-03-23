import attr from 'ember-data/attr'
import Model from 'ember-data/model'
import {fragmentArray} from 'ember-data-model-fragments/attributes'

import {isAny, filterBy} from 'ember-awesome-macros/array'
import raw from 'ember-macro-helpers/raw'


export default Model.extend({
  description : attr('string'),
  files       : fragmentArray('file'),

  featureFiles           : filterBy('files',        raw('isFeature'),   true),
  expandableFeatureFiles : filterBy('featureFiles', raw('isExpandable'), true),

  areAnyScenariosExpandable          : isAny('featureFiles',           raw('areAnyScenariosExpandable'),          true),
  areAnyExpandableScenariosExpanded  : isAny('expandableFeatureFiles', raw('areAnyExpandableScenariosExpanded'),  true),
  areAnyExpandableScenariosCollapsed : isAny('expandableFeatureFiles', raw('areAnyExpandableScenariosCollapsed'), true),

  setAll (value) {
    this.files.invoke('setAll', value)
  },
})
