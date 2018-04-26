// This is copy and paste code for the truffle console. npm run console.

var token
SampleToken.deployed().then(function(t) {token=t})
var accounts = web3.eth.accounts