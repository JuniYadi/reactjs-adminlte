import React, { useState } from 'react';
import { connect } from 'react-redux';
import {loginUser} from "../redux/actions/AuthAction";

const LoginForm = ({ dispatchLoginAction }) => {

    // state for save input
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        dispatchLoginAction(email, password,
            () => console.log('Login Success'),
            (message) => console.log(`Error: ${message}`));
    };

    return (
        <>
            <form noValidate onSubmit={handleOnSubmit}>
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
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchLoginAction: (email, password, onSuccess, onError) =>
        dispatch(loginUser({ email, password}, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(LoginForm);