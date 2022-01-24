const farenheitInput = document.querySelector('#farenheit > input');
const celsiusInput = document.querySelector('#celsius > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num * 100) / 100;
}
function converterFToC() {
    const fTemp = parseFloat(farenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = cTemp + 273.15;
    farenheitInput.value = roundNum(fTemp);
    celsiusInput.value= roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}
function converterCToK() {
    const cTemp = parseFloat(celsiusInput.value);
    const fTemp = (cTemp * (9/5) + 32);
    const kTemp = (cTemp + 459.67) * 5/9;
    celsiusInput.value = roundNum(cTemp);
    farenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
} 
function converterKToCAndF() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 237.15;
    const fTemp = 9/5 * (kTemp -273) +32;
    celsiusInput.value = roundNum(cTemp);
    farenheitInput.value = roundNum(fTemp);
}
function main() {
    farenheitInput.addEventListener('input', converterFToC);
    celsiusInput.addEventListener('input', converterCToK);    
    kelvinInput.addEventListener('input', converterKToCAndF);
}
main();