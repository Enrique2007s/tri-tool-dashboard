//conversions
const KM_TO_MILES = 0.621371;
const LITERS_TO_GALLONS = 0.264172;

const distanceInput = document.getElementById('distanceInput');
const distanceFrom = document.getElementById('distanceFrom');
const distanceTo = document.getElementById('distanceTo');
const distanceResult = document.getElementById('distanceResult');


// Initialize converters on page load
window.onload = function() {
    convertDistance();
}

// Add event listeners for real-time conversion
distanceInput.addEventListener('input', convertDistance);
distanceFrom.addEventListener('change', convertDistance);
distanceTo.addEventListener('change', convertDistance);

// Function to convert distance
function convertDistance() {
    let value = parseFloat(distanceInput.value);
    if (isNaN(value)) value = 0;

    let from = distanceFrom.value;
    let to = distanceTo.value;
    let result;

    if (from === 'km') {
    } else if (from === 'mi') {
        value = value / KM_TO_MILES;
    }

    if (to === 'km') {
        result = value;
    } else if (to === 'mi') {
        result = value * KM_TO_MILES;
    }

    distanceResult.textContent = 
        `${distanceInput.value} ${from} = ${result.toFixed(2)} ${to}`;
}







//swap distance units
function swapDistance() {
    let from = distanceFrom.value;
    let to = distanceTo.value;

    distanceFrom.value = to;
    distanceTo.value = from;

    convertDistance();
}