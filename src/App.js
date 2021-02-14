import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// import crypto from 'crypto';
import AdminPage from "./pages/Admin/AdminPage";
import LoginPage from "./pages/LoginPage";

// function gravatarUrl(email) {
//   return "https://www.gravatar.com/avatar/" + crypto.createHash('md5').update(email).digest('hex');
// }

const App = ({ user }) => {

    // useEffect(() => {
    //     document.getElementById("body").className="hold-transition sidebar-mini layout-fixed";
    // });

    return (
        <>
            {!user.isLoggedIn ? (
                <Switch>
                    <Route exact path="/login" component={LoginPage} />
                    <Redirect to="/login" />
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/admin" component={AdminPage} />
                    <Redirect to="/admin" />
                </Switch>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
    dispatchLogoutAction: () => {}
});
export default connect(mapStateToProps)(App);
