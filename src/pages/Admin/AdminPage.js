import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

// Import Page
import Navbar from "../../components/Navbar.component";
import Sidebar from "../../components/Sidebar.component";
import Footer from "../../components/Footer.component"
import AdminDashboardPage from "./AdminDashboardPage";

const AdminPage = () => {
    return (
        <BrowserRouter>
            {/*Default Page Template After Login*/}
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/admin/dashboard" component={AdminDashboardPage} />
                <Redirect to="/admin/dashboard" />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AdminPage;