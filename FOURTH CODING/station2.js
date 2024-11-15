// Function to open Google Maps centered on the GLIDA Charging Station
function openMap() {
    const mapUrl = "https://www.google.com/maps/place/Ather+Grid+Charging+Station/@13.0980153,77.5943573,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae19b63d2939b1:0xa7c8cb471fab5942!8m2!3d13.0980101!4d77.5969322!16s%2Fg%2F11p1075j_z?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(mapUrl, "_blank");
}

// Function to start navigation to the charging station using Google Maps
function startNavigation() {
    const navigationUrl = "https://www.google.com/maps/dir/13.1289019,77.5863388/%231599,+Ather+Grid+Charging+Station,+1,+Nehru+Nagar,+next+to+Post+Office,+old+town,+Yelahanka,+Bengaluru,+Karnataka+560064/@13.1193992,77.5738755,14z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3bae19b63d2939b1:0xa7c8cb471fab5942!2sAther+Grid+Charging+Station!8m2!3d13.0980101!4d77.5969322!16s%2Fg%2F11p1075j_z!4m8!1m1!4e1!1m5!1m1!1s0x3bae19b63d2939b1:0xa7c8cb471fab5942!2m2!1d77.5969322!2d13.0980101?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D";
    window.open(navigationUrl, "_blank");
}
