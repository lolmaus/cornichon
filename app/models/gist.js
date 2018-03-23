import attr from 'ember-data/attr'
import Model from 'ember-data/model'
import {fragmentArray} from 'ember-data-model-fragments/attributes'

import {isAny, filterBy} from 'ember-awesome-macros/array'
import raw from 'ember-macro-helpers/raw'


export default Model.extend({
  description : attr('string'),
  files       : fragmentArray('file'),

  featureFiles : filterBy('files', raw('isFeature'), true),

  doAnyScenariosHaveContent : isAny('featureFiles', raw('doAnyScenariosHaveContent')),
  areAnyScenariosExpanded   : isAny('featureFiles', raw('areAnyScenariosExpanded')),
  areAnyScenariosCollapsed  : isAny('featureFiles', raw('areAnyScenariosCollapsed')),

  setAll (value) {
    this.files.invoke('setAll', value)
  },
})
