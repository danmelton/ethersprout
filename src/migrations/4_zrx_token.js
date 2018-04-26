const ZRXToken = artifacts.require('./ZRXToken.sol')

module.exports = (deployer) => {
  deployer.deploy(ZRXToken)
}
