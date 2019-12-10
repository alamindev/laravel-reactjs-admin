import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import {connect} from 'react-redux'
import {logout} from '../Store/Actions/AuthAction'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {toggleSidebar} from '../Utils/ToggleSidebar';
import LoadingBar from 'react-redux-loading-bar'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        toggleSidebar();
    }
    render() {
        return (
            <header className="header"> 
             <LoadingBar   style={{ zIndex: 9999 }}/>
                <nav className="navbar navbar-expand-lg">  
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <div className="navbar-header">
                            <a href="index.html" className="navbar-brand">
                                <div className="brand-text brand-big visible text-uppercase"><strong
                                    className="text-primary">Dark</strong><strong>Admin</strong></div>
                                <div className="brand-text brand-sm"><strong className="text-primary">D</strong><strong>A</strong></div>
                            </a>
                            <button className="sidebar-toggle">
                                <FontAwesome className="fas fa-long-arrow-left" name="long-arrow-left" />
                            </button>

                        </div>
                        <ul className="right-menu list-inline no-margin-bottom">
                            <li className="list-inline-item logout"> <button id="logout" className="nav-link dev__logout"
                                onClick={() => this.props.logout(this.props.history)}>Logout <i className="fa fa-logout"></i></button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default withRouter(connect(mapStateToProps, {logout})(Header));