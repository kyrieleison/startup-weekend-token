pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract StartupWeekendToken is StandardToken {
  string public name = 'StartupWeekendToken';
  string public symbol = 'SWT';
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 12000;

  function StartupWeekendToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
