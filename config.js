const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const configPath = path.join(__dirname, 'config.yaml')

let config
try {
  config = yaml.safeLoad(fs.readFileSync(configPath))
} catch (e) {
  console.error('Failed to load config.yaml: ' + e.message)
  throw e
}

module.exports = config
