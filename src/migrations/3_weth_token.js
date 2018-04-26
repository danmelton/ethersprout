const WETH9 = artifacts.require('./WETH9.sol')

module.exports = (deployer) => {
  deployer.deploy(WETH9)
}
