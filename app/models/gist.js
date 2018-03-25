import {inject as service} from '@ember/service'
import attr from 'ember-data/attr'
import Model from 'ember-data/model'
import {fragment, fragmentArray} from 'ember-data-model-fragments/attributes'

import {eq} from 'ember-awesome-macros'
import {isAny, filterBy} from 'ember-awesome-macros/array'
import raw from 'ember-macro-helpers/raw'

import EditableFieldsMixin from 'cornichon/mixins/editable-fields'



export default Model.extend(EditableFieldsMixin, {
  description : attr('string'),
  files       : fragmentArray('file'),
  owner       : fragment('owner'),
  public      : attr('boolean'),
  truncated   : attr('boolean'),

  url        : attr('string'),
  forksUrl   : attr('string'),
  commitsUrl : attr('string'),
  htmlUrl    : attr('string'),

  session : service(),

  editableFields         : ['description'],
  editableChildrenArrays : ['files'],

  featureFiles           : filterBy('files',        raw('isFeature'),   true),
  expandableFeatureFiles : filterBy('featureFiles', raw('isExpandable'), true),

  areAnyScenariosExpandable          : isAny('featureFiles',           raw('areAnyScenariosExpandable'),          true),
  areAnyExpandableScenariosExpanded  : isAny('expandableFeatureFiles', raw('areAnyExpandableScenariosExpanded'),  true),
  areAnyExpandableScenariosCollapsed : isAny('expandableFeatureFiles', raw('areAnyExpandableScenariosCollapsed'), true),

  isOwn : eq('session.data.authenticated.user.login', 'owner.login'),

  setAll (value) {
    this.files.invoke('setAll', value)
  },
})
