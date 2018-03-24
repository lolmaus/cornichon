import Service/* , {inject as service} */ from '@ember/service'
import config from 'cornichon/config/environment'

import {equal} from 'ember-awesome-macros'
import raw from 'ember-macro-helpers/raw'
import reads from 'ember-macro-helpers/reads'



export default Service.extend({

  // ----- Services -----



  // ----- Overridden properties -----



  // ----- Static properties -----
  environment   : config.environment,
  envVars       : config.envVars,
  host          : reads('envVars.COR_HOST'),
  gatekeeperUrl : reads('envVars.COR_GATEKEEPER_URL'),
  namespace     : '/content',



  // ----- Computed properties -----
  isDev  : equal('environment', raw('development')),
  isTest : equal('environment', raw('test')),
  isProd : equal('environment', raw('production')),



  // ----- Overridden Methods -----



  // ----- Custom Methods -----



  // ----- Events and observers -----



  // ----- Tasks -----

})
