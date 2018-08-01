address: owned by user or smart contract
0x0cE446…

mapping: key value pair mapping (address => uint) public accountBalance;  // 금융 앱용, user account balance
mapping (uint => string) userIdToName;  // maps id with name

msg.sender: pointing address who called smart contract or function (function that returns address)
mapping (address => uint) favoriteNumber;  // think about other combinations too. user’s age, contract owners, etc

function setMyNumber(uint _myNumber) public { 	favoriteNumber[msg.sender] = _myNumber;  // storing uint number in favorite number mapping }

function whatIsMyNumber() public view returns (uint) { 	return favoriteNumber[msg.sender];  // if sender hasn’t called setMyNumber, return is 0. }

