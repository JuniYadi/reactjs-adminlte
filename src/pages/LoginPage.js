import React, { useEffect, useState } from 'react';
import LoginForm from "../components/Login.component";

const LoginPage = () => {

    useEffect(() => {
        // update body class
        document.getElementById("body").className="hold-transition login-page";
        // update root class
        document.getElementById("root").className="login-box";
    });

    return (
        <>
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <a href="#"><b>PFNDrive</b></a>
                </div>

                <div className="card-body">
                    <p className="login-box-msg">Login to Access Dashboard</p>

                    <LoginForm />

                </div>
            </div>
        </>
    )
}

export default LoginPage;