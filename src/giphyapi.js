const APIKEY = '359ae54fc81f961128eba924684fcf1e';
const img = document.querySelector('.card-img-top');
const giphyImg = (weather) => fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY}=${weather}`,
  { mode: 'cors' },
)
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  });
export default giphyImg;