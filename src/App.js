import React, { useState, useEffect } from 'react';
import flickr from './apis/flickr';
import SearchBar from './components/SearchBar';
require('dotenv').config();

const App = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    onTermSubmit('/');
  },[]);

  const onTermSubmit = async term => {
    const response = await flickr.get('/', {
      params: {
        text: term,
        tags: term
      }
    });
    console.log(response.data.photos);
    setImage(response.data.photos.photo);
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      App
    </div>
  );

};

export default App;