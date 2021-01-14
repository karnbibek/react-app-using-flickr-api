import React, { useState, useEffect } from 'react';
import flickrGroupDetails from '../apis/flickrGroupDetails';

const GroupIcon = ({ group }) => {
    const [groupPhoto, setGroupPhoto] = useState([]);

    const getGroupDetails = async () => {
        const response = await flickrGroupDetails.get('/', {
            params: {
                group_id: group.nsid,
                page: 1
            }
        });
        if (response.data.photos) {
            if (response.data.photos.photo[0]) {
                const icon = await `https://farm${response.data.photos.photo[0].farm}.staticflickr.com/${response.data.photos.photo[0].server}/${response.data.photos.photo[0].id}_${response.data.photos.photo[0].secret}.jpg`;
                setGroupPhoto(icon);
            }
        }
    }

    useEffect(() => {
        getGroupDetails();
        // eslint-disable-next-line
    }, []);

    if (groupPhoto) {
        return (
            <img className="right floated mini ui image" src={groupPhoto} alt="group" />
        );
    } 
    return (
        <img className="right floated mini ui image" alt="group" />
    );
}

export default GroupIcon;