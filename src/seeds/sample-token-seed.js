const SampleToken = artifacts.require('../contracts/SampleToken.sol')

// use console.log(this) to see top level JS object
// const accounts = web3.eth.accounts
const runMe = async () => {
  const accounts = web3.eth.accounts
  const tokenContract = await SampleToken.deployed()
  console.log(accounts)
  console.log(tokenContract)
}

module.exports = async () => {
  await runMe()
}
