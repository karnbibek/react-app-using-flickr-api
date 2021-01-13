import React, { useState, useEffect } from 'react';
import flickrGroupDetails from '../apis/flickrGroupDetails';

const CanvasChart = ({ results }) => {
    const [totalPhoto, setTotalPhoto] = useState([]);
    // console.log(results);

    const resulting = async () => results.groups.group.map(g => {
        const getGroupDetails = async () => {
            const response = await flickrGroupDetails.get('/', {
                params: {
                    group_id: g.nsid
                }
            });
            if (response.data.photos) {
            totalPhoto.push(response.data.photos.total);
            // setTotalPhoto([...totalPhoto, response.data.photos.total]);
            console.log(response.data.photos);
            console.log(g.nsid);
            console.log(totalPhoto);
            // const totalArray = [...totalPhoto, response.data.photos.total];
            }
        }
        return getGroupDetails();
    })

    useEffect(() => {
        // setGroupDetail(response.data);
        resulting();
        // getGroupDetails();
    }, []);
    
    const renderChart = () => {
        console.log(totalPhoto);
        if (totalPhoto.length > 0) {
            return (<div>{totalPhoto}</div>);
        } else {
            return (<div>No items to show</div>);
        }
    }
    if(totalPhoto.length > 0){
    return (
        <div>{renderChart()}</div>
    );
    }
    return (<div>No items to show</div>);
}

export default CanvasChart;