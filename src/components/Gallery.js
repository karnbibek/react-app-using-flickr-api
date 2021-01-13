import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-css';

import flickrGroupDetails from '../apis/flickrGroupDetails';
import Image from './Image';

var pageNumber = 1;

const Gallery = (props) => {
    const history = useHistory();

    const [imagesArray, setImagesArray] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const fetchImages = async (pageNum) => {
        // console.log(pageNum);
        const response = await flickrGroupDetails.get('/', {
            params: {
                group_id: props.match.params.id,
                page: pageNum
            }
        });
        if(response.data.photos) {
        setImagesArray([...imagesArray, ...response.data.photos.photo]);
        setTotalPages(response.data.photos.pages);
        // setTotalPages(1);
        // console.log(response.data.photos.pages);
        }
    }

    useEffect(() => {
        fetchImages(pageNumber);
    }, []);

    const clickHandler = () => {
        history.push('/groups');
    }

    const breakPointsColumnsObj = {
        default: 6,
        1200: 3,
        992: 3,
        768: 2,
        576: 1
    }

    // console.log(imagesArray);
    return (
        <div className="container-fluid">
            <button className="ui left labeled icon green button" onClick={clickHandler} style={{marginTop:"10px", marginLeft:"39%"}}>
                <i className="left arrow icon"></i>
                    Groups
            </button>
                            {imagesArray.length === 0 ? <h1 style={{textAlign:"center"}}>No images found for selected group</h1> : null}
            <div className="row">
                <div className="col-md-12">
                    <InfiniteScroll pageStart={0} loadMore={() => fetchImages(++pageNumber)} hasMore={pageNumber < totalPages ? true : false}>
                        <Masonry breakpointCols={breakPointsColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
                            {imagesArray.map((image) => (
                                <Image key={image.id} {...image} />
                            ))}
                        </Masonry>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default Gallery;