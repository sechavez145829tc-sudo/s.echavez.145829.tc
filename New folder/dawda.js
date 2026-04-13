let userLat, userLng, heading;

// GPS
navigator.geolocation.watchPosition(position => {
    userLat = position.coords.latitude;
    userLng = position.coords.longitude;
});

// Compass
window.addEventListener("deviceorientation", function(event) {
    heading = event.alpha;

    if (userLat && userLng && heading) {
        updateArrow(userLat, userLng, heading);
    }
});