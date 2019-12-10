
import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = rest;
    return (
        <Route
            {...rest} render={props => (
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: {from: props.location}
                        }} />
                    )
            )}
        />
    );
};
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default withRouter(connect(mapStateToProps)(PrivateRoute));