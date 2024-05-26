document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donateButton');
    const transactionStatus = document.getElementById('transactionStatus');
    const donationsList = document.getElementById('donationsList');

    donateButton.addEventListener('click', function() {
        const donationAmount = document.getElementById('donationAmount').value;
        // Call your smart contract donate function here
        // For now, we'll just simulate a successful transaction
        simulateTransaction(donationAmount);
    });

    function simulateTransaction(amount) {
        // Simulate a delay for blockchain transaction
        transactionStatus.textContent = 'Processing your donation...';
        setTimeout(() => {
            transactionStatus.textContent = 'Donation successful!';
            addDonationToList(amount);
        }, 2000);
    }

    function addDonationToList(amount) {
        const listItem = document.createElement('li');
        listItem.textContent = `Donated ${amount} ETH`;
        donationsList.appendChild(listItem);
    }
});



function updateDonationTracker(donatedAmount) {
    const goalAmount = 100; // Example goal
    const raisedAmount = Math.min(donatedAmount, goalAmount);
    const progressBar = document.getElementById('progress-bar');
    const donationStatus = document.getElementById('donation-status');

    const progressPercentage = (raisedAmount / goalAmount) * 100;
    progressBar.style.width = progressPercentage + '%';
    donationStatus.textContent = `Raised: ${raisedAmount} ETH`;
}


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
});


function shareOnSocialMedia(platform) {
    const message = encodeURIComponent("I've just donated to a great cause via Impact Chain!");
    let url;

    switch (platform) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${message}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}&quote=${message}`;
            break;
        // Add more platforms here
    }

    window.open(url, '_blank');
}

