import React from 'react';
import logo from '../../images/logo.svg';
import { useForm } from "react-hook-form";
import './Register.css'

const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="register-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="register-inner text-center mt-4">
                                <img src={logo} alt="" className="img-fluid"/>
                                <div className="row mt-5">
                                    <div className="col-md-6 mx-auto">
                                        <div className="register-form">
                                            <h4>Register as a Volunteer</h4>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <input className="form-control" type="text" name="name" placeholder="Full Name" ref={register({ required: true })} />
                                                {errors.name && <span>This field is required</span>}
                                                <input className="form-control" placeholder="UserName or Email" type="email" name="email" ref={register({ required: true })} />
                                                {errors.email && <span>This field is required</span>}
                                                <input className="form-control" placeholder="Date" type="date" name="date" ref={register({ required: true })} />
                                                {errors.date && <span>This field is required</span>}
                                                <input className="form-control" placeholder="Description" type="text" name="description" ref={register({ required: true })} />
                                                {errors.description && <span>This field is required</span>} 
                                                <input className="form-control" placeholder="Organize books at the library." type="text" name="vnName" ref={register({ required: true })} />
                                                {errors.vnName && <span>This field is required</span>}
                                                <input type="submit" className="btn btn-primary register-btn" value="Register"/>
                                            </form>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;