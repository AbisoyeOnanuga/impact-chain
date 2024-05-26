// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract FeeManager {
    bool public sent;
    mapping(address => bool) public OperatorId;
    uint256 public fee;
    uint256 public feeMaxLimit;
    address public feeReceiver;

    function setOperator(address _newOperator) public {
        require(_newOperator != address(0), "Invalid operator address");
        OperatorId[_newOperator] = true;
    }

    function setFeeMaxLimit(uint256 _newFeeMaxLimit) public {
        require(_newFeeMaxLimit < 100, "Fee max limit should be less than 100");
        feeMaxLimit = _newFeeMaxLimit;
    }

    function setFee(uint256 _newFee) public {
        require(_newFee <= feeMaxLimit, "Fee exceeds max limit");
        fee = _newFee;
    }

    function setFeeReceiver(address _newFeeReceiver) public {
        require(_newFeeReceiver != address(0), "Invalid fee receiver address");
        feeReceiver = _newFeeReceiver;
    }

    function transferWithFee(address _to, uint256 _value) public payable {
        uint256 feeAmount = (_value * fee) / 100;
        uint256 newValue = _value - feeAmount;

        (bool sentValue, ) = payable(_to).call{value: newValue}("");
        require(sentValue, "Failed to send Ether value");

        (bool sentFee, ) = payable(feeReceiver).call{value: feeAmount}("");
        require(sentFee, "Failed to send Ether fee");
    }
}
