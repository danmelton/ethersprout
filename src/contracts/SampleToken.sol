pragma solidity ^0.4.23;

import { ERC20Token } from "./ERC20Token.sol";

contract SampleToken is ERC20Token {

    uint8 constant public decimals = 18;
    uint public totalSupply = 10000; // 10000 tokens, 18 decimal places
    string constant public name = "Sample Token";
    string constant public symbol = "SPT";
    address public creator;

    constructor() public {
        creator = msg.sender;
        balances[msg.sender] = 10000;
    }

}