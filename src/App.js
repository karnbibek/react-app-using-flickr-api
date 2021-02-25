import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from './components/SearchBar';

const App = () => {
  const history = useHistory();

  const onTermSubmit = async term => {
    localStorage.setItem('term', term);
    history.push('/groups');
  }

  return (
    <div className="ui container">
      {/* <SearchBar /> */}
      <SearchBar onFormSubmit={onTermSubmit} />
    </div>
  );

};

export default App;