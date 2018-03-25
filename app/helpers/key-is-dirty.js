import { helper } from '@ember/component/helper'

import {keyIsDirty} from 'cornichon/utils/editable-fields'



export default helper(([key]) => keyIsDirty(key))
