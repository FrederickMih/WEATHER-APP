// const APIKEY = 'dCj6E5d1AjAF6BzBeBzGTnCAIYBB8fq2';
const img = document.querySelector('.card-img-top');

const giphyImg = (weather) => fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=dCj6E5d1AjAF6BzBeBzGTnCAIYBB8fq2&s=${weather}`,
  { mode: 'cors' },
)
  .then((response) => response.json())
  .then((response) => {
    img.src = response.data.images.original.url;
  });
export default giphyImg;