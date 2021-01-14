import React, { useState } from 'react';

import searchRecommendation from '../apis/searchRecommendation';
import './SearchBar.css';

const SearchBar = ({ onFormSubmit }) => {
    var local = localStorage.getItem('term');

    const [term, setTerm] = useState(local || '');
    const [searchResults, setSearchResults] = useState([]);
    
    const onSubmit = (event) => {
        event.preventDefault();
        setTerm(term);
        setSearchResults([]);
        onFormSubmit(term);
    }
    
    const clickHandler = (event, term) => {
        event.preventDefault();
        setTerm(term);
        setSearchResults([]);
        onFormSubmit(term);
    }

    const onInputChange = async (event) => {
        setTerm(event.target.value);
        const response = await searchRecommendation.get('/', {
            params: {
                tag: term
            }
        });
        if (response.data.tags) {
            // console.log(response.data.tags.tag.slice(0, 10));
            setSearchResults(response.data.tags.tag.slice(0, 6));
        }
    };

    const showSearchResult =
        searchResults.map(r => {
            return (
                <ul key={r._content}>
                    <li onClick={(event) => clickHandler(event,r._content)}>{r._content}</li>
                </ul>
            );
        })


    return (
        <div className="search-bar ui segment" style={{marginBottom:"20px"}}>
            <form onSubmit={onSubmit} className="ui form center">
                <div className="field">
                <label>Search</label>
                {/* <div className="ui search">
                    <div className="ui icon input">
                        <input
                            className="prompt"
                            type="text"
                            value={term}
                            onChange={onInputChange}
                            autoComplete="on"
                        />
                        <i className="search icon"></i>
                    </div>
                </div>
                    <div className="results">hello</div> */}
                        {/* {showSearchResult} */}
                        <div className="searched">
                            <input className="queryy" type="text" value={term} onChange={onInputChange} />
                            {showSearchResult}
                        </div>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;