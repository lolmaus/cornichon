import { helper } from '@ember/component/helper'

import {keyUserInput} from 'cornichon/utils/editable-fields'



export default helper(([key]) => keyUserInput(key))
