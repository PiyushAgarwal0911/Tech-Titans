// Function to generate a color based on level with opacity adjustments
function getColorForLevel(level, isRed) {
    let colorValue;
    let opacity = 1; // Default opacity for green
    let color;

    // Adjust colors and opacity based on the level and whether it's red or green
    if (level === 1) {
        // Lighter shades for Level 1
        colorValue = isRed ? 180 : 120;
        opacity = isRed ? 0.6 : 0.9; // Red sockets will have lower opacity
    } else if (level === 2) {
        // Medium shades for Level 2
        colorValue = isRed ? 150 : 180;
        opacity = isRed ? 0.7 : 0.85;
    } else if (level === 3) {
        // Darker shades for Level 3
        colorValue = isRed ? 100 : 220;
        opacity = isRed ? 0.8 : 1; // Green has full opacity
    }

    // Set the color based on red or green
    if (isRed) {
        color = `rgba(${colorValue}, 0, 0, ${opacity})`; // Red color
    } else {
        color = `rgba(0, ${colorValue}, 0, ${opacity})`; // Green color
    }

    return color;
}

// Function to populate the socket grid dynamically
function createSocketGrid() {
    const socketGrid = document.querySelector(".socket-grid");

    // Example socket details
    const sockets = [
        { name: "Socket 1", level: Math.ceil(Math.random() * 3) },
        { name: "Socket 2", level: Math.ceil(Math.random() * 3) },
        { name: "Socket 3", level: Math.ceil(Math.random() * 3) },
        { name: "Socket 4", level: Math.ceil(Math.random() * 3) },
        { name: "Socket 5", level: Math.ceil(Math.random() * 3) },
        { name: "Socket 6", level: Math.ceil(Math.random() * 3) }
    ];

    // Loop to generate sockets
    sockets.forEach(socket => {
        const isRed = Math.random() > 0.5; // Randomly decide if red or green
        const socketBox = document.createElement("div");
        socketBox.className = "socket-box";
        socketBox.style.backgroundColor = getColorForLevel(socket.level, isRed);

        socketBox.innerHTML = `
            <div class="socket-name">${socket.name}</div>
            <div class="socket-details">Level ${socket.level}</div>
        `;
        socketGrid.appendChild(socketBox);
    });
}

// Load the grid
window.onload = createSocketGrid;
