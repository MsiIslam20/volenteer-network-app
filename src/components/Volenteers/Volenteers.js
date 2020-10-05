import React, { useEffect, useState } from 'react';
import SingleVolunteer from '../SingleVolunteer/SingleVolunteer';
import './Volenteer.css'

const Volenteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/volenteers")
        .then(res => res.json())
        .then(data => {
            setVolunteers(data)
        })
    }, [])
    return (
        <>
            <div className="volunteer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 px-0">
                            <div className="volunteer-inner">
                                <div className="row">
                                    {
                                        volunteers.map(vn => <SingleVolunteer key={vn._id} vn={vn}></SingleVolunteer>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Volenteers;