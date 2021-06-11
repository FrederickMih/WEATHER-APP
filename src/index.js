import './main.scss';

const APIKEY = '359ae54fc81f961128eba924684fcf1e';
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
const cityTextTop = document.querySelector('.card-text-top');
