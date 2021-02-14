import React, { useEffect, useState } from 'react';

const LoginPage = () => {

    // state for save input
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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

                    <form noValidate>
                        <div className="input-group mb-3">
                            <input type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email Address"
                                   className="form-control"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <i className="fas fa-lock"/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"
                                   className="form-control"
                                   />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <i className="fas fa-key"/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;