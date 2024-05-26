document.addEventListener('DOMContentLoaded', function() {
    // Handle donation button click
    const donateButton = document.getElementById('donateButton');
    donateButton.addEventListener('click', function() {
        const donationAmount = document.getElementById('donationAmount').value;
        // Mockup transaction processing
        processDonation(donationAmount);
    });

    // Handle login button click (Mockup for ICP ID authentication)
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        // Mockup login process
        loginUserWithICPID();
    });
});

function processDonation(amount) {
    // Simulate a donation transaction
    const transactionStatus = document.getElementById('transactionStatus');
    transactionStatus.textContent = 'Processing your donation...';
    setTimeout(() => {
        transactionStatus.textContent = 'Donation successful!';
        displayRecentTransaction(amount);
    }, 2000);
}

function loginUserWithICPID() {
    // Simulate ICP ID login
    alert('ICP ID login simulated.');
}

function displayRecentTransaction(amount) {
    // Display the recent transaction
    const transactionsSection = document.getElementById('transactions');
    const transactionCard = document.createElement('div');
    transactionCard.textContent = `Donated ${amount} ETH`;
    transactionsSection.appendChild(transactionCard);
}

// Add this to your script.js
document.getElementById('navigationButton').addEventListener('click', function() {
    window.location.href = 'donate.html';
});