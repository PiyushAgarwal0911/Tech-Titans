// Function to open Google Maps centered on the GLIDA Charging Station
function openMap() {
    const mapUrl = "https://www.google.com/maps/place/GLIDA+Charging+Station/@13.0975171,77.5938213,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19406765e641:0xfd75e88ed6c023e2!8m2!3d13.0975119!4d77.5963962!16s%2Fg%2F11y3kynxfb?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(mapUrl, "_blank");
}

// Function to start navigation to the charging station using Google Maps
function startNavigation() {
    const navigationUrl = "https://www.google.com/maps/dir/13.1289019,77.5863388/GLIDA+Charging+Station,+Yelahanka+Yelahanka,+33%2F2,+Yelahanka+Main+Rd,+Allalasandra,+Yelahanka,+Bengaluru,+Karnataka+560065/@13.1193992,77.5738755,14z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3bae19406765e641:0xfd75e88ed6c023e2!2sGLIDA+Charging+Station!8m2!3d13.0975119!4d77.5963962!16s%2Fg%2F11y3kynxfb!4m8!1m1!4e1!1m5!1m1!1s0x3bae19406765e641:0xfd75e88ed6c023e2!2m2!1d77.5963962!2d13.0975119?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(navigationUrl, "_blank");
}
