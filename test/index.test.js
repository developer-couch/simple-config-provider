const { expect } = require('chai')

const { ConfigManager } = require('../lib')

describe('ConfigManager', function () {
  before(function () {
    process.env.ICECREAM = 'CHOCOLATE'
  })

  describe('#get()', function () {
    it('should return environment variables by name', function () {
      const configManager = new ConfigManager()
      expect(configManager.get('ICECREAM')).to.equal('CHOCOLATE')
    })
  })
})
