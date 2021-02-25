import React, { useMemo, useState } from 'react';

import searchRecommendation from '../apis/searchRecommendation';
import './SearchBar.css';

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}
const SearchBar = ({ onFormSubmit }) => {
    var local = localStorage.getItem('term');
    const [term, setTerm] = useState(local || '');
    const [searchResults, setSearchResults] = useState([]);
    
    const onSubmit = (event) => {
        event.preventDefault();
        // setTerm(term);
        setSearchResults([]);
        onFormSubmit(term);
    }
    
    const clickHandler = (event, term) => {
        event.preventDefault();
        // setTerm(term);
        setSearchResults([]);
        onFormSubmit(term);
    }
    
        const onInputChange = async (value) => {
            const response = await searchRecommendation.get('/', {
                params: {
                    tag: value
                }
            });
            setTerm(value);
            if (response.data.tags) {
                setSearchResults(response.data.tags.tag.slice(0, 6));
            }
        };

        const debounceOnChange = useMemo(() => debounce(onInputChange, 400), []);
        
    const showSearchResult =
        searchResults.map(r => {
            return (
                <ul key={r._content}>
                    <li onClick={(event) => clickHandler(event, r._content)}>{r._content}</li>
                </ul>
            );
        })


    return (
        <div className="search-bar ui segment" style={{ marginBottom: "20px" }}>
            <form onSubmit={onSubmit} className="ui form center">
                <div className="field">
                    <label>Search</label>
                    <div className="searched">
                        <input className="queryy" type="text" onChange={(e) => debounceOnChange(e.target.value)} />
                        {/* <input className="queryy" type="text" value={term} onChange={onInputChange} /> */}
                        {showSearchResult}
                    </div>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;