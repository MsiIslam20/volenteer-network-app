import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SingleEvent = (props) => {
    const {vnName, img, date, _id}  = props.event;
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
            }
        })
    }

    return (
        <>
            <div className="col-md-6">
                <div className="single-event">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={img} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-7">
                            <h4>{vnName}</h4>
                            <h6>Date: {date}</h6>
                            <div className="cancel">
                                <button onClick={() => handleDelete(_id)} className="btn btn-primary btn-cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;