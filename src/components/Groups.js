import React, { useEffect, useState } from "react";
import flickr from '../apis/flickr';
import App from '../App';
import GroupIcon from './GroupIcon';
import CanvasChart from './CanvasChart';

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
            // console.log(response);
        }
        renderResults();
    }, [term])

    const renderGroups = () => {
        return results.groups.group.map((group) => {
            return (
                <div className="ui cards" key={group.nsid} style={{ marginLeft: "30%", marginRight: "30%" }}>
                    <div className="card">
                        <div className="content">
                            <GroupIcon group={group} />
                            <div className="header">
                                <a href={`/gallery/${group.nsid}`}>{group.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    const renderChart = () => {
        // return results.groups.group.map((group) => {
            console.log(results);
            return (
                <CanvasChart results={results} />
            );
        // })
    }

    return (
        <div>
            <App />
            {results.groups ?
                <div>
                    {renderGroups()}
                    {renderChart()}
                </div>
                :
                <div className="ui icon message" style={{ marginLeft: "8px", width: "97%" }}>
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                        <div className="header">
                            No matching groups found.
                    </div>
                        <p>Search for the group names above to see the details.</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Groups;