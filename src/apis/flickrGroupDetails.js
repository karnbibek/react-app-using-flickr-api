import axios from 'axios';

export default axios.create ({ 
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&format=json&nojsoncallback=1`
});