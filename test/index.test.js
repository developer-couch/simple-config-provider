const { expect } = require('chai')

const { ConfigManager, ConfigError } = require('../lib')

describe('ConfigManager', function () {
  before(function () {
    process.env.ICECREAM = 'CHOCOLATE'
  })

  describe('#constructor()', function () {
    it('should raise a ConfigError if environment variable type doesn\'t match passed type', function () {
      const options = {
        ICECREAM: 'number'
      }
      expect(() => new ConfigManager(options)).to.throw(ConfigError, 'Expected ICECREAM environment variable to be of type number. Instead, a string was found.')
    })
  })

  describe('#get()', function () {
    it('should return environment variables by name', function () {
      const configManager = new ConfigManager()
      expect(configManager.get('ICECREAM')).to.equal('CHOCOLATE')
    })
  })
})
