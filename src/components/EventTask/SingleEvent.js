import React from 'react';

const SingleEvent = (props) => {
    const {vnName, img, date}  = props.event;
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
                                <button className="btn btn-primary btn-cancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;