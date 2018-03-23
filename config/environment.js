'use strict'

const _            = require('lodash')
const dotenvConfig = require('./dotenv')

module.exports = function (environment) {
  const {clientAllowedKeys} = dotenvConfig(environment)
  const envVars             = _.pick(process.env, clientAllowedKeys)

  let ENV = {
    modulePrefix    : 'cornichon',
    podModulePrefix : 'cornichon/pods',
    environment,
    rootURL         : envVars.COR_ROOT_URL || '/',
    locationType    : 'hash',
    EmberENV        : {
      FEATURES : {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES : {
        // Prevent Ember Data from overriding Date.parse.
        Date : false,
      },
    },

    APP : {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii : {
      providers : {
        'github-oauth2' : {
          apiKey : envVars.COR_GITHUB_CLIENT_ID,
          // redirectUri: overridden in provider's `redirectUri` property
          scope  : 'public_repo',
        },
      },
    },
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
    ENV.APP.autoboot = false
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV
}
