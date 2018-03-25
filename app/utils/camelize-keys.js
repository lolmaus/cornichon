import { camelize } from '@ember/string'

import _ from 'lodash'



export default function camelizeKeys (obj) {
  return _.mapKeys(obj, (value, key) => camelize(key))
}
