import logo from './AdminLTELogo.png';
import './App.css';
import crypto from 'crypto';

function gravatarUrl(email) {
  return "https://www.gravatar.com/avatar/" + crypto.createHash('md5').update(email).digest('hex');
}

function App() {

  const email = 'johndoe@gmail.com'
  const emailGravatar = gravatarUrl(email);

  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-green navbar-light">

        {/*Left navbar links*/}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="../../index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>

        {/*Right Navbar Link*/}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown user-menu">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src={emailGravatar} className="user-image img-circle bg-white elevation-2"
                   alt="User Image" />
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <li className="user-header">
                <img src={emailGravatar} className="img-circle elevation-2" alt="User Image" />
                  <p>
                    {email}
                    <small>Admin</small>
                  </p>
              </li>

              {/*Menu Footer*/}
              <li className="user-footer">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
                <a href="#" className="btn btn-danger btn-flat float-right">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/*Main Sidebar*/}
      <aside className="main-sidebar sidebar-dark-green elevation-4">
        {/*Sidebar Logo*/}
        <a href="#" className="brand-link">
          <img src={logo}
               alt="Logo"
               className="brand-image img-circle elevation-3"
               style={{ opacity: .8 }}
          />
          <span className="brand-text font-weight-bold">ReactJS</span>
        </a>

        {/*Sidebar Menu*/}
        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default App;
