import React from "react";
import {BrowserRouter} from "react-router-dom";
import SideBar from '../Partials/Sidebar'; // partial
import Header from '../Partials/Header'; //partial

import Routes from './Routes'; // import route separate file
import BreadCrumbs from "../Partials/Breadcrumbs";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; 
const AppRouter = (props) => {
  
  return (
    <BrowserRouter>
      {props.isAuthenticated && <div>
        <Header />
        <div className="d-flex align-items-stretch">
          <SideBar />
          <div className="page-content">
            <BreadCrumbs /> 
             <Routes /> 
          </div>
        </div >
      </div>}
      {!props.isAuthenticated &&
        <Routes />}
    </BrowserRouter>
  );



}


AppRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AppRouter); 