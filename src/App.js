import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import crypto from 'crypto';
import AdminPage from "./pages/Admin/AdminPage";
import LoginPage from "./pages/LoginPage";

// function gravatarUrl(email) {
//   return "https://www.gravatar.com/avatar/" + crypto.createHash('md5').update(email).digest('hex');
// }

const App = () => {

    // useEffect(() => {
    //     document.getElementById("body").className="hold-transition sidebar-mini layout-fixed";
    // });

    return (
        <>

            <Switch>
                <Route exact path="/login" component={LoginPage} />

                {/*Default Page Template After Login*/}
                <Route exact path="/admin" component={AdminPage} />

                {/*Redirect if not authenticated*/}
                <Redirect to="/login" />
            </Switch>
        </>
    )
}

export default App;
