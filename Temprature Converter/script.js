const celsiusElem = document.getElementById("celsius-input");
const fahrenheitElem = document.getElementById("fahrenheit-input");
const kelvinElem = document.getElementById("kelvin-input");

let celsiusValue;
let fahrenheitValue;
let kelvinValue;

// FOR CELSIUS
const celsiusFncChange = () => {
  // To Fahrenheit:
  // 𝐹=(𝐶×9/5)+32
  fahrenheitValue = Number(celsiusElem.value * 9) / 5 + 32;
  fahrenheitElem.value = fahrenheitValue.toFixed(2);
  // To Kelvin:
  // 𝐾=𝐶+273.15
  kelvinValue = Number(celsiusElem.value) + 273.15;
  kelvinElem.value = kelvinValue.toFixed(2);
};

// FOR FAHRENHEIT
const fahrenheitFncChange = () => {
  //To Celsius:
  // 𝐶=K−273.15
  celsiusValue = Number(kelvinElem.value) - 273.15;
  celsiusElem.value = celsiusValue.toFixed(2);
  // To Kelvin:
  // 𝐾=(𝐹−32)×5/9+273.15
  kelvinValue = ((Number(fahrenheitElem.value) - 32) * 5) / 9 + 273.15;
  kelvinElem.value = kelvinValue.toFixed(2);
};

const kelvinFncChange = () => {
  // To Celsius:
  // 𝐶=𝐾−273.15
  celsiusValue = (Number(kelvinElem.value) * 9) / 5 + 32;
  celsiusElem.value = celsiusValue.toFixed(2);
  // To Fahrenheit:
  // 𝐹=(𝐾−273.15)×9/5+32
  fahrenheitValue = (Number(kelvinElem.value - 273.15) * 9) / 5 + 32;
  fahrenheitElem.value = fahrenheitValue.toFixed(2);
};

celsiusElem.addEventListener("input", celsiusFncChange);
fahrenheitElem.addEventListener("input", fahrenheitFncChange);
kelvinElem.addEventListener("input", kelvinFncChange);
