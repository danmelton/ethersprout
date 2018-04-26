const Exchange = artifacts.require('./Exchange.sol')
const TokenTransferProxy = artifacts.require('./TokenTransferProxy.sol')
const ZRXToken = artifacts.require('./ZRXToken.sol')

module.exports = (deployer) => {
  deployer.deploy(Exchange, ZRXToken.address, TokenTransferProxy.address)
}
