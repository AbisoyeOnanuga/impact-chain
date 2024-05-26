document.addEventListener('DOMContentLoaded', function() {
    const proceedButton = document.getElementById('proceedButton');
    proceedButton.addEventListener('click', function() {
        const donationAmount = document.getElementById('donationAmount').value;
        // Store the donation amount in local storage for retrieval on the confirmation page
        localStorage.setItem('donationAmount', donationAmount);
        // Navigate to the confirmation page
        window.location.href = 'confirm.html';
    });
});