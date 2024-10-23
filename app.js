function filterAds() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const ads = document.querySelectorAll('.ad');

    ads.forEach(ad => {
        const title = ad.querySelector('h3').textContent.toLowerCase();
        if (title.includes(input)) {
            ad.style.display = 'inline-block';
        } else {
            ad.style.display = 'none';
        }
    });
}
