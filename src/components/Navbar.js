import React from 'react';
import PropTypes from 'prop-types';



export default function Navbar(props) {
        return (
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.link}</a>
              </li>
             </ul>
            <div className="form-check form-switch ">
                <input className="form-check-input " onClick={props.toggleName} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==="light"?"dark":"light"} me-5`} htmlFor="flexSwitchCheckDefault">{props.switch}</label>
              </div>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
   };

// Navbar.defaultProps = {
//     title: 'text title here',
//     link: 'link',
// };

