//conversions
const KM_TO_MILES = 0.621371;
const LITERS_TO_GALLONS = 0.264172;

//DOM elements
const distanceInput = document.getElementById("distanceInput");
const distanceFrom = document.getElementById("distanceFrom");
const distanceTo = document.getElementById("distanceTo");
const distanceResult = document.getElementById("distanceResult");

const volumeInput = document.getElementById("volumeInput");
const volumeFrom = document.getElementById("volumeFrom");
const volumeTo = document.getElementById("volumeTo");
const volumeResult = document.getElementById("volumeResult");

const tempInput = document.getElementById("tempInput");
const tempFrom = document.getElementById("tempFrom");
const tempTo = document.getElementById("tempTo");
const tempResult = document.getElementById("tempResult");

// Initialize converters when the page loads
window.onload = function() {
    convertDistance();
    convertVolume();
    convertTemperature();
};

// Add event listeners for real-time conversion
distanceInput.addEventListener("input", convertDistance);
distanceFrom.addEventListener("change", convertDistance);
distanceTo.addEventListener("change", convertDistance);

volumeInput.addEventListener("input", convertVolume);
volumeFrom.addEventListener("change", convertVolume);
volumeTo.addEventListener("change", convertVolume);

tempInput.addEventListener("input", convertTemperature);
tempFrom.addEventListener("change", convertTemperature);
tempTo.addEventListener("change", convertTemperature);

// Function to convert distance
function convertDistance() {
    let value = parseFloat(distanceInput.value);
    if (isNaN(value)) value = 0;

    let from = distanceFrom.value;
    let to = distanceTo.value;
    let result;

    //convert from km first
    if (from === "km") {
    } else if (from === "mi") {
        value = value / KM_TO_MILES;
    }
    //convert from km to mi
    if (to === "km") {
        result = value;
    } else if (to === "mi") {
        result = value * KM_TO_MILES;
    }
    //updates answer for distance
    distanceResult.textContent = 
        `${distanceInput.value} ${from} = ${result.toFixed(2)} ${to}`;
}


//function to convert volume
function convertVolume() {
    let value = parseFloat(volumeInput.value);
    if (isNaN(value)) value = 0;

    let from = volumeFrom.value;
    let to = volumeTo.value;
    let result;

    //convert from litres first
    if (from === "litres") {
    } else if (from === "gallons") {
        value = value / LITERS_TO_GALLONS;
    }
    //convert from litres to gallons
    if (to === "litres") {
        result = value;
    } else if (to === "gallons") {
        result = value * LITERS_TO_GALLONS;
    }
    //updates answer for volume
    volumeResult.textContent = 
        `${volumeInput.value} ${from} = ${result.toFixed(2)} ${to}`;
}


//function to convert temperature
function convertTemperature() {
    let value = parseFloat(tempInput.value);
    if (isNaN(value)) value = 0;

    let from = tempFrom.value;
    let to = tempTo.value;
    let result;

    //convert from celsius first
    if (from === "celsius") {
    } else if (from === "fahrenheit") {
        value = (value - 32) * 5 / 9;
    } else if (from === "kelvin") {
        value = value - 273.15;
    }
    //convert from celsius to fahrenheit
    if (to === "celsius") {
        result = value;
    } else if (to === "fahrenheit") {
        result = (value * 9 / 5) + 32;
    } else if (to === "kelvin") {
        result = value + 273.15;
    }

    //adding the symbol for temperature units

    if (from === "celsius") from = "°C";
    else if (from === "fahrenheit") from = "°F";
    else if (from === "kelvin") from = "K";

    //adding the symbol for temperature units

    if (to === "celsius") to = "°C";
    else if (to === "fahrenheit") to = "°F";
    else if (to === "kelvin") to = "K";

    //updates answer for temperature
    tempResult.textContent = 
        `${tempInput.value} ${from} = ${result.toFixed(2)} ${to}`;
}

//swap distance units
function swapDistance() {
    let from = distanceFrom.value;
    let to = distanceTo.value;

    distanceFrom.value = to;
    distanceTo.value = from;

    convertDistance();
}

//swap volume units
function swapVolume() {
    let from = volumeFrom.value;
    let to = volumeTo.value;

    volumeFrom.value = to;
    volumeTo.value = from;

    convertVolume();
}

/*
I don't swap temperature units since
there are three units. User will have
to select manually... Or go to my repository,
fork it, and add the feature him/herself :)
*/