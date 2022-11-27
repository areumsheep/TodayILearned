const API_URL = 'https://api.thecatapi.com/v1/images/search?size=full';

export const fetchCatImage = () => {
  let image = null;
  const suspender = fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        image = data[0].url;
      }, 3000);
    });

  return {
    read() {
      if (image === null) {
        throw suspender;
      } else {
        return image;
      }
    },
  };
};

function fetchData() {
  return {
    images: fetchCatImage(),
  };
}

export default fetchData;
