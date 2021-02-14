import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import crypto from 'crypto';
import AuthPage from "./pages/authpage.component";
import Navbar from "./components/Navbar.component";
import Sidebar from "./components/Sidebar.component";

// function gravatarUrl(email) {
//   return "https://www.gravatar.com/avatar/" + crypto.createHash('md5').update(email).digest('hex');
// }

const App = () => {

    useEffect(() => {
        document.getElementById("body").className="hold-transition sidebar-mini layout-fixed";
    });

    return (
        <>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/auth" component={AuthPage} />
                <Redirect to="/auth" />
            </Switch>
        </>
    )
}

export default App;
