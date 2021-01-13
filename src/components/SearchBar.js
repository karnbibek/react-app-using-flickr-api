import React, { useState } from 'react';
import searchRecommendation from '../apis/searchRecommendation';

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
    
    const clickHandler = (term) => {
        // event.preventDefault();
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
            setSearchResults(response.data.tags.tag.slice(0, 10));
        }
    };

    const showSearchResult =
        searchResults.map(r => {
            return (
                <div className="results" key={r._content} onClick={() => clickHandler(r._content)}>{r._content}</div>
            );
        })


    return (
        <div className="search-bar ui segment" style={{marginBottom:"20px"}}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                <label>Search</label>
                <div className="ui category search">
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
                        {showSearchResult}
                </div>
            </form>
        </div>
    );

}

export default SearchBar;