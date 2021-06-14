import './main.scss';
import giphyImg from './giphyapi';
import degreeCelsuisToFahrenheit from './change-units';

const navBar = document.querySelector('.top-nav');
let cityName = document.querySelector('.form-control').value;
const myCard = document.querySelector('.card');
const myLoader = document.querySelector('.loader');
const myCardBody = document.getElementById('card-body');
const displayError = document.querySelector('.display-error');
const cityTextTop = document.querySelector('.card-text-top');
const convertBtn = document.querySelector('.btn-primary');

let mainTemp = 0;
let feelsLike = 0;
myCard.style.display = 'none';
myLoader.style.display = 'none';
displayError.style.display = 'none';

const flag = document.querySelector('.flag-img');

convertBtn.onclick = () => degreeCelsuisToFahrenheit(mainTemp, feelsLike);
document.getElementById('button-addon').onclick = () => {
  navBar.style.display = 'none';
  myLoader.style.display = 'block';
  displayError.style.display = 'none';
  cityName = document.querySelector('.form-control');
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=359ae54fc81f961128eba924684fcf1e`;
  const getWeatherInfo = async () => {
    const response = await fetch(link, { mode: 'cors' });
    return response.json();
  };

  cityName.value = '';
  if (
    document.getElementById('flag-par') !== null
    && document.getElementById('flag-par') !== undefined
  ) {
    document.getElementById('flag-par').remove();
  }
  const cityTitle = document.querySelector('.card-title');

  const cityText = document.querySelector('.card-text-bottom');
  getWeatherInfo()
    .then((data) => {
      myCard.appendChild(myCardBody);
      cityTitle.innerHTML = `${data.name}, ${data.sys.country}`;
      flag.src = `https://www.countryflags.io/${data.sys.country.toLowerCase()}/shiny/64.png`;
      mainTemp = data.main.temp;
      feelsLike = data.main.feels_like;
      cityTextTop.innerHTML = `Temperature: ${(Number.parseInt(mainTemp, 10) - 273.15).toFixed(
        2,
      )} \u00B0C <br>`
        + `Feels like: ${(Number.parseInt(feelsLike, 10) - 273.15).toFixed(
          2,
        )} \u00B0C`;

      cityText.innerHTML = `Humidity: ${data.main.humidity} %`
        + `<br> Wind speed: ${data.wind.speed} m/s`
        + `<br> Weather condition: ${data.weather[0].description}`;
      giphyImg(data.weather[0].description);
      myLoader.style.display = 'none';
      myCard.style.display = 'block';
      myCardBody.style.display = 'block';
    })
    .catch(() => {
      giphyImg('error');
      myCard.style.display = 'block';
      myLoader.style.display = 'none';
      myCardBody.style.display = 'none';
      displayError.style.display = 'block';
    });
};
