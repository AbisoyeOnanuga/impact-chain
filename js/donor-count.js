let donorCount = 0; // Initialize with any existing donor count

function incrementDonorCount() {
    donorCount++;
    // Update donor count display on relevant pages
    document.getElementById('donorCount').textContent = donorCount;
}
