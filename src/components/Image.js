import React from 'react';
const Image = (props) => {
    const { farm, server, id, secret, ownername, title } = props;
    // console.log(props)
    return (
        <div className="row">
            <div className="col-md-12 px-0">
                <div className="card rounded-lg overflow-hidden">
                    <h3 style={{color:"black", background:"red", marginBottom: "0", textAlign:"center"}}>{title}</h3>
                    <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${ownername}`} />
                    <h4 style={{color:"antiquewhite", background:"grey", marginBottom: "0", textAlign:"center"}}>Owner : {ownername}</h4>
                </div>
            </div>
        </div>
    );
}

export default Image;