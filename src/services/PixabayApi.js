import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '24739812-632d84cc6c0c90167994a5978';

function fetchImages(nextName, currentPage) {
  return axios
    .get(
      `?q=${nextName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(response => response.data.hits);
}

export default { fetchImages };
