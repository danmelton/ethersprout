const SampleToken = artifacts.require('./SampleToken.sol')

module.exports = (deployer) => {
  deployer.deploy(SampleToken)
}
