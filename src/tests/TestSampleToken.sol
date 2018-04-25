pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SampleToken.sol";


contract TestSampleToken {

    function testInitialBalanceWithNewSampleToken() public {
        SampleToken token = new SampleToken();

        Assert.equal(address(this), address(token.creator()), "Creator address should equal this contract");
        Assert.equal(uint(10000), token.balanceOf(address(this)), "Creator address should have the total balance");
    }

}