import React, { useState, useEffect } from 'react';
import flickrGroupDetails from '../apis/flickrGroupDetails';

const GroupIcon = ({ group }) => {
    const [groupPhoto,setGroupPhoto] = useState([]);

    useEffect(() => {
        const getGroupDetails = async () => {
            const response = await flickrGroupDetails.get('/', {
                params: {
                    group_id: group.nsid,
                    page: 1
                }
            });
            // setGroupDetail(response.data);
            // console.log(response.data.photos);
            if(response.data.photos) {
            if(response.data.photos.photo[0]) {
                const icon = await `https://farm${response.data.photos.photo[0].farm}.staticflickr.com/${response.data.photos.photo[0].server}/${response.data.photos.photo[0].id}_${response.data.photos.photo[0].secret}.jpg`;
                setGroupPhoto(icon);
            }}
        }
        getGroupDetails();
    }, []);

    if (groupPhoto) {
    return (
        // <img className="ui middle aligned tiny circular image" src={groupPhoto} alt="photo" />
        <img className="right floated mini ui image" src={groupPhoto} alt="group" />
    );
    } 
}

export default GroupIcon;