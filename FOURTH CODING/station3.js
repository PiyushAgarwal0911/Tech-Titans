// Function to open Google Maps centered on the GLIDA Charging Station
function openMap() {
    const mapUrl = "https://www.google.com/maps/place/Okaya+Charging+Station/@13.1407235,77.615471,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae192ea1d79fef:0x22fe2227449f665d!8m2!3d13.1407183!4d77.6180459!16s%2Fg%2F11n7zn_s51?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(mapUrl, "_blank");
}

// Function to start navigation to the charging station using Google Maps
function startNavigation() {
    const navigationUrl = "https://www.google.com/maps/dir//Okaya+Charging+Station,+Survey+No:+7,+International+Airport+Road,+Beside+Anant+Cars,,+Hunasamaranahalli,+Yelahanka,Village+Jala+Hobli,+Bharti+Nagar,+Hunasamaranahalli,+Bengaluru,+Karnataka+562157/@13.1407235,77.615471,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae192ea1d79fef:0x22fe2227449f665d!2m2!1d77.6180459!2d13.1407183?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(navigationUrl, "_blank");
}
