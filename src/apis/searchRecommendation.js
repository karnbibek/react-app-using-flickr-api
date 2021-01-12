import axios from 'axios';

export default axios.create ({ 
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.tags.getRelated&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&per_page=20&page=1&format=json&nojsoncallback=1`
});