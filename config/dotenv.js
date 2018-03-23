const fs = require('fs')

function getDeployTarget () {
  return process.env.DEPLOY_TARGET || getDefaultDeployTarget()
}

function getDefaultDeployTarget () {
  const environment =
    process.env.EMBER_ENV
    || deployEnv()
    || 'development'

  return environment === 'production' ? 'production' : 'local'
}

function deployEnv () {
  if (process.argv[2] === 'deploy' && process.argv[3] === 'prod') {
    throw new Error('Command `ember deploy prod` is not supported. Please use `ember deploy production`.')
  } else if (process.argv[2] === 'deploy' && process.argv[3] === 'production') {
    return 'production'
  }
}



const path   = `./.env-${getDeployTarget()}`

if (fs.existsSync(path)) console.info(`Using dotenv file: ${path}`)
else console.warn(`dot-env file not found: ${path}, assuming env vars are passed manually`)



const clientAllowedKeys = [
  'COR_DEPLOY_TARGET',
  'COR_GITHUB_CLIENT_ID',
  'COR_GATEKEEPER_URL',
  'COR_ROOT_URL',
]


module.exports = function (env) {
  return {
    clientAllowedKeys,
    path,
  }
}
