// Function to open Google Maps centered on the GLIDA Charging Station
function openMap() {
    const mapUrl = "https://www.google.com/maps/place/Delta+Charging+Station/@13.0956266,77.5916329,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19eef6a41a7b:0xcc61a780347e8cae!8m2!3d13.0956214!4d77.5942078!16s%2Fg%2F11n5zzkgd5?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(mapUrl, "_blank");
}

// Function to start navigation to the charging station using Google Maps
function startNavigation() {
    const navigationUrl = "https://www.google.com/maps/dir//3HWV%2B6MW,+Suggappa+Layout,+East+Colony,+Yelahanka,+Bengaluru,+Karnataka+560064/@13.0956083,77.5118059,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae19eef6a41a7b:0xcc61a780347e8cae!2m2!1d77.5942078!2d13.0956214?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(navigationUrl, "_blank");
}
