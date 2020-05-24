// Map
var mymap = L.map('map', {
    center: [23.8408767, 91.4214196],
    zoom: 13
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ'
}).addTo(mymap);
var marker = L.marker([23.8408767, 91.4214196]).addTo(mymap);
marker.bindPopup('<b>NIT Agartala</b><br>SANGANAN PRAYOG<br> <a target="_blank" href="https://www.google.com/maps/place/National+Institute+of+Technology+Agartala/@23.8406804,91.4211192,17z/data=!4m5!3m4!1s0x0:0xf1c683a298e69e7b!8m2!3d23.8408767!4d91.4214196">Click here</a>').openPopup();

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Map Token
// sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ