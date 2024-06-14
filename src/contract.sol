// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract CharityDonation {
    uint256 public totalDonations;
    address public owner;

    // Event to emit when a donation is received
    event DonationReceived(address donor, uint256 amount);

    constructor() {
        totalDonations = 0;
        owner = msg.sender;
    }

    // Modifier to restrict certain functions to the owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    // Function to accept donations
    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0.");
        totalDonations += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }

    // Function to reset the total donations (can be called by the owner only)
    function resetTotalDonations() public onlyOwner {
        totalDonations = 0;
    }

    // Function to withdraw funds (can be called by the owner only)
    function withdraw(uint256 _amount) public onlyOwner {
        require(_amount <= address(this).balance, "Insufficient balance to withdraw.");
        payable(owner).transfer(_amount);
    }

    // Function to check the contract's balance
    function checkBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
