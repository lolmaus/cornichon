import { helper } from '@ember/component/helper'

import {keyIsValid} from 'cornichon/utils/editable-fields'



export default helper(([key]) => keyIsValid(key))
