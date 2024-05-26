document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the donation amount from local storage
    const donationAmount = localStorage.getItem('donationAmount');
    document.getElementById('donationValue').textContent = donationAmount + ' ETH';

    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', function() {
        // Here you would normally handle the blockchain transaction
        alert('Donation confirmed! Thank you for your generosity.');
        // Redirect to a thank you page or back to the home page
        window.location.href = 'index.html';
    });
});