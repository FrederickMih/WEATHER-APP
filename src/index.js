import './main.scss';
import giphyImg from './giphyapi';

const city = document.getElementById('city');
const navBar = document.querySelector('.top-nav');
const temperature = document.getElementById('temp');
const humidity = document.getElementById('humid');
const wind = document.getElementById('wind');
const state = document.getElementById('state');
const cityName = document.querySelector('.form-control').value;
const myCard = document.querySelector('.card');
const myLoader = document.querySelector('.loader');
const myCardBody = document.getElementById('card-body');
const displayError = document.querySelector('display-error');

const temp = 0;
const tempFeels = 0;
myCard.style.display = 'none';
myLoader.style.display = 'none';
displayError.style.display = 'none';

