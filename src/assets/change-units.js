const cityTextTop = document.querySelector('.card-text-top');
const convertBtn = document.querySelector('.btn-primary');
const degreeToFahrenheit = (kelvins, kelvinFeels) => {
  if (convertBtn.textContent.includes('Fahrenheit')) {
    convertBtn.innerHTML = 'Temperature in Celsius';
    cityTextTop.innerHTML = `Main temperature: ${(
      (Number.parseInt(kelvins, 10) - 273.15) * 1.8
        + 32
    ).toFixed(2)} \u00B0F <br>`
      + `Feels like: ${(
        (Number.parseInt(kelvinFeels, 10) - 273.15) * 1.8
        + 32
      ).toFixed(2)} \u00B0F`;
  } else {
    convertBtn.innerHTML = 'Temperature in Fahrenheit';
    cityTextTop.innerHTML = `Main temperature: ${(Number.parseInt(kelvins, 10) - 273.15).toFixed(
      2,
    )} \u00B0C <br>`
      + `Feels like: ${(Number.parseInt(kelvinFeels, 10) - 273.15).toFixed(
        2,
      )} \u00B0C`;
  }
};


