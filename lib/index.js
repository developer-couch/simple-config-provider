class ConfigManager {
  constructor (options) {
    if (typeof options === 'object') {
      for (const [name, _options] of Object.entries(options)) {
        const variable = process.env[name]
        const variableType = typeof variable
        if (variableType !== _options) {
          throw new ConfigError(`Expected ${name} environment variable to be of type ${_options}. Instead, a ${variableType} was found.`)
        }
      }
    }
  }

  get (name) {
    return process.env[name]
  }
}

class ConfigError extends Error {}

exports.ConfigManager = ConfigManager
exports.ConfigError = ConfigError
