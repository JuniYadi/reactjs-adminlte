import React from 'react';
import * as dayjs from 'dayjs'

const Footer = () => {
    // Get This Year
    const now = dayjs().year();
    const date = dayjs().format('DD/MM/YYYY');

    // current Website
    const currentHost = window.location.hostname;
    const currentURL = window.location.origin;

    return (
        <>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>{date}</b>
                </div>
                <strong>Copyright &copy; {now} <a href={currentURL}>{currentHost}</a>.</strong> All rights
                reserved.
            </footer>

            {/*Control Sidebar*/}
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </>
    )
}

export default Footer;