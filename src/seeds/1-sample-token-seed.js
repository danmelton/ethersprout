var SampleToken = artifacts.require("../contracts/SampleToken.sol");

//use console.log(this) to see top level JS object

const runMe = async() => {

  const accounts = web3.eth.accounts;

  const tokenContract = await SampleToken.deployed();

  for (i in accounts) {
    await tokenContract.balanceOf(accounts[i]).then( b => console.log(b));
  }

}

module.exports = async () => {
  runMe();
}
