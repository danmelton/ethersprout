// This seed file deploys 10 sample tokens from the issuer at address 0, and then transfers balance of 100 to each account

const SampleToken = artifacts.require('../contracts/SampleToken.sol')

// use console.log(this) to see top level JS object
// const accounts = web3.eth.accounts

const transfer = async (accounts, contract) => {
  let i
  for (i = 1; i < 10; i++) {
    await contract.transfer(accounts[i], 10)
    console.log(`transferring 10 SPT Tokens to address ${accounts[i]} (balance: ${await contract.balanceOf(accounts[i])}) from address ${accounts[0]} (balance: ${await contract.balanceOf(accounts[0])})`)
  }
}

const sellTrade = async (contract, makerAddr, takerAddr, val) => {
  await contract.transfer(takerAddr, 10, {from: makerAddr})
  console.log(`selling ${val} SPT Tokens from maker ${makerAddr} (balance: ${await contract.balanceOf(makerAddr)}) to taker ${takerAddr} (balance: ${await contract.balanceOf(takerAddr)}) `)
}

module.exports = async () => {
  const accounts = web3.eth.accounts
  const tokenContract = await SampleToken.deployed()
  await transfer(accounts, tokenContract)
  await sellTrade(tokenContract, accounts[1], accounts[2], 10)
}
