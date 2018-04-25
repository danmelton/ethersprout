var SampleToken = artifacts.require("SampleToken");

contract('SampleToken', function(accounts) {

  it("should put 10000 SampleToken in the first account", function() {
    return SampleToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 10000, "10000 is in the first account");
    });
  });

});