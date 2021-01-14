import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import flickrGroupDetails from '../apis/flickrGroupDetails';

const CanvasChart = ({ results }) => {
    const [totalPhoto, setTotalPhoto] = useState([]);
    const [groupNames, setGroupNames] = useState([]);
    const [arrayLength, setArrayLength] = useState(0);
    var array = [];
    var names = [];
    const resulting = async () => results.groups.group.map(g => {
        const getGroupDetails = async () => {
            const response = await flickrGroupDetails.get('/', {
                params: {
                    group_id: g.nsid
                }
            });
            if (response.data.photos) {
                array.push(response.data.photos.total);
                // setTotalPhoto([...totalPhoto, response.data.photos.total]);
                names.push(g.name);
                setGroupNames([names]);
                // console.log(array);
                // const totalArray = [...totalPhoto, response.data.photos.total];
                setTotalPhoto([array]);
                setArrayLength(array.length);
            }
        }
        return getGroupDetails();
    })

    useEffect(() => {
        if (results.groups.group.length === 0) {
            return null;
        }
        resulting();
        // eslint-disable-next-line
    }, [results]);

    const renderChart = () => {
        // console.log(totalPhoto[0]);
        if (totalPhoto.length > 0) {
            const barData = {
                labels: [groupNames[0]][0],
                datasets: [
                    {
                        label: "Number of photos in groups",
                        data: [totalPhoto[0]][0],
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'black',
                        borderWidth: 1,
                        hoverBackgroundColor: "blue"
                    }
                ]
            }

            const options = {}
            // console.log(barData.datasets);
            return (
                <div className="chart card" style={{ margin: "20px" }}>
                    <h2 style={{ textAlign: "center" }}>No. of Photos in Groups vs Names</h2>
                    <Bar data={barData} options={options} />
                </div>
            );
        } else {
            return (<div>No items to show</div>);
        }
    }
    if(results.groups.group.length === 0) {
        return <h2>No data found. Please search with another keyword.</h2>
    }

    if (totalPhoto[0] && totalPhoto[0].length === arrayLength) {
        return (
            <div>{renderChart()}</div>
        );
    }
    return (<h3>Loading Charts...</h3>);
}

export default CanvasChart;