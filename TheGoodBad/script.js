// Get the slider, value, and feel elements
const slider = document.getElementById('slider');
const valueDisplay = document.getElementById('value');
const feelElements = document.querySelectorAll('.feel');  
const emoji = document.getElementById('emoji');
const button = document.getElementById('nextButton');

button.addEventListener('mousemove', (event) => {
    // Get button dimensions and position
    const { left, top, width, height } = button.getBoundingClientRect();
    const buttonX = left + width / 2;
    const buttonY = top + height / 2;

    // Get cursor position relative to the button
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    // Calculate angle for gradient direction
    const angle = Math.atan2(cursorY - buttonY, cursorX - buttonX) * 180 / Math.PI;

    // Update button gradient background
    button.style.background = `linear-gradient(${angle + 180}deg, #007bff, #00d2ff)`;
});

button.addEventListener('mouseleave', () => {
    // Reset background on mouse leave
    button.style.background = '#007bff'; // Default button color
});

// Update the value display and feel with the slider 
slider.addEventListener('input', function () {
    const percentageValue = slider.value;  
    let mood;
    let displayedValue;

    // Determine the mood and adjust the displayed percentage
    if (percentageValue > 50) {
        mood = 'happy';
        displayedValue = percentageValue;  
    } else if (percentageValue < 50) {
        mood = 'sad';
        displayedValue = 100 - percentageValue;  // Invert the percentage for sad (e.g., 49 -> 51%)
    } else {
        mood = 'meh';  
        displayedValue = percentageValue;
    }

    // Update the displayed value percentage
    valueDisplay.textContent = displayedValue;

    // Update the elements
    feelElements.forEach(function (element) {
        element.textContent = mood;
    });
    // Rotate the emoji
    const rotationAngle = 180-(percentageValue / 100) * 180;
    emoji.style.transform = `rotate(${rotationAngle}deg)`;
});
