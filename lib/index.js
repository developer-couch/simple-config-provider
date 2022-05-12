class ConfigManager {
  get (name) {
    return process.env[name]
  }
}

exports.ConfigManager = ConfigManager
