import React, { useEffect, useState } from "react";
import flickr from '../apis/flickr';
import App from '../App';
import GroupIcon from './GroupIcon';

const Groups = () => {
    const [results, setResults] = useState([]);

    var term = localStorage.getItem('term');
    useEffect(() => {
        const renderResults = async () => {
            const response = await flickr.get('/', {
                params: {
                    text: term
                }
            });
            setResults(response.data);
        }
        renderResults();
    }, [term])

    const renderGroups = () => {

        if (results.groups) {
            return results.groups.group.map((group) => {
                return (
                    <div className="ui cards" key={group.nsid} style={{ marginLeft: "25%", marginRight: "25%" }}>
                        <div className="card">
                            <div className="content">
                                <GroupIcon group={group} />
                                <div className="header">{group.name}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        } else {
            return (
                <div className="ui icon message" style={{marginLeft:"8px", width:"97%"}}>
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                        <div className="header">
                            No matching groups found.
                        </div>
                        <p>Search for the group names above to see the details.</p>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            <App />
            {renderGroups()}
        </div>
    );
}

export default Groups;