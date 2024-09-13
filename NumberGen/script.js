// Gradient effect for prevButton
const prevButton = document.getElementById('prevButton');

prevButton.addEventListener('mousemove', (event) => {
    // Get the button's position and dimensions
    const rect = prevButton.getBoundingClientRect();
    const x = event.clientX - rect.left; // Mouse X position relative to the button
    const y = event.clientY - rect.top;  // Mouse Y position relative to the button

    // Set the gradient background using the cursor's relative position
    prevButton.style.background = `radial-gradient(circle at ${x}px ${y}px, #007bff, #00d2ff)`;
});

prevButton.addEventListener('mouseleave', () => {
    // Reset background on mouse leave to default gradient
    prevButton.style.background = 'linear-gradient(135deg, #007bff, #00d2ff)';
});

// Gradient effect for nextButton with cursor movement
const nextButton = document.getElementById('nextButton');


nextButton.addEventListener('mousemove', (event) => {
    // Get the button's position and dimensions
    const rect = nextButton.getBoundingClientRect();
    const x = event.clientX - rect.left; // Mouse X position relative to the button
    const y = event.clientY - rect.top;  // Mouse Y position relative to the button

    // Set the gradient background using the cursor's relative position
    nextButton.style.background = `radial-gradient(circle at ${x}px ${y}px, #007bff, #00d2ff)`;
});

nextButton.addEventListener('mouseleave', () => {
    // Immediately reset the gradient background to the default gradient when the mouse leaves
    nextButton.style.background = 'linear-gradient(135deg, #007bff, #00d2ff)';
});

nextButton.addEventListener('mouseenter', () => {
    // Ensure that the gradient resets to the default when you start hovering again
    nextButton.style.background = 'linear-gradient(135deg, #007bff, #00d2ff)';
});


// Random number generator functionality
const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let intervalId;

// Function to generate a random 9-digit number formatted as parts
function generateRandomNumber() {
    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
    const numberString = randomNumber.toString().padStart(9, '0');
    return {
        part1: numberString.slice(0, 2),
        part2: numberString.slice(2, 6),
        part3: numberString.slice(6, 10)
    };
}

// Function to update the display with random number parts
function updateDisplay() {
    const { part1: p1, part2: p2, part3: p3 } = generateRandomNumber();
    part1.textContent = p1;
    part2.textContent = p2;
    part3.textContent = p3;
}

// Start randomizing on button click
function startRandomizing() {
    if (intervalId) return; // Prevent multiple intervals
    intervalId = setInterval(updateDisplay, 100); // Update every 100 milliseconds
}

// Stop randomizing on button click
function stopRandomizing() {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
}

// Set initial display
function setInitialDisplay() {
    part1.textContent = '00';
    part2.textContent = '0000';
    part3.textContent = '0000';
}

// Event listeners for the randomizer buttons
startButton.addEventListener('click', startRandomizing);
stopButton.addEventListener('click', stopRandomizing);

// Initialize display on page load
setInitialDisplay();
