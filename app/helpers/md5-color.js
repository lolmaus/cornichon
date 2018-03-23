import { helper } from '@ember/component/helper'
import { htmlSafe } from '@ember/string'

import md5 from 'md5'



// Check color brightness
// returns brightness value from 0 to 255
// http://www.webmasterworld.com/forum88/9769.htm
function getBrightness (hexCode) {
  // strip off any leading #
  hexCode = hexCode.replace('#', '')

  var c_r = parseInt(hexCode.substr(0, 2), 16)
  var c_g = parseInt(hexCode.substr(2, 2), 16)
  var c_b = parseInt(hexCode.substr(4, 2), 16)

  return ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000
}



export function md5Color ([str]/*, hash*/) {
  const bgColor = md5(str).slice(0, 6)
  const color = getBrightness(bgColor) > 160 ? 'black' : 'white'
  const style = `background-color: #${bgColor}; color: ${color};`
  return htmlSafe(style)
}

export default helper(md5Color)
