const TokenTransferProxy = artifacts.require('./TokenTransferProxy.sol')

module.exports = (deployer) => {
  deployer.deploy(TokenTransferProxy)
}
