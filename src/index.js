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
  //   const APIKEY = '359ae54fc81f961128eba924684fcf1e';
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=359ae54fc81f961128eba924684fcf1e`;
  const getWeatherInfo = async () => {
    const response = await fetch(link, { mode: 'cors' });
    return response.json();
  };

  cityName.value = '';
  if (
    document.getElementById('flag-par') !== null
    && document.getElementById('flag-par') !== undefined
  ) { document.getElementById('flag-par').remove(); }
  const cityTitle = document.querySelector('.card-title');

  const cityText = document.querySelector('.card-text-bottom');
  
