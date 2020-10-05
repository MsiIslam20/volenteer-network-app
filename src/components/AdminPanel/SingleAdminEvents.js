import React from 'react';

const SingleAdminEvents = (props) => {
    const {name, email, date, vnName, _id} = props.event;
    const handleDelete = (e , id) => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                e.parentNode.style.display = 'none';
            }
        })
    }

    return (
        <ul className="list-unstyled">
           <li>{name}</li> 
           <li>{email}</li> 
           <li>{date}</li> 
           <li>{vnName}</li> 
           <li onClick={(e) => handleDelete(e.currentTarget, _id)} className="delete-list">Delete</li> 
        </ul>
    );
};

export default SingleAdminEvents;