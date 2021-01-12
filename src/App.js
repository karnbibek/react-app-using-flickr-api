import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import flickr from './apis/flickr';
import SearchBar from './components/SearchBar';
import Groups from './components/Groups';
require('dotenv').config();

const App = () => {
  const [image, setImage] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //   onTermSubmit('/');
  // },[]);

  const onTermSubmit = async term => {
    localStorage.setItem('term', term);
    const response = await flickr.get('/', {
      params: {
        text: term
        // tags: term
      }
    });
    // setImage(response.data.photos.photo);
    history.push('/groups');
    // console.log(response.data);
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
    </div>
  );

};

export default App;