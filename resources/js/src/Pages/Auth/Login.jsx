import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAction } from "../../Store/Actions/AuthAction";
import { ServerError } from "../../Store/Actions/AuthAction";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withRouter, Redirect } from "react-router-dom";
import { labelActive } from "../../Utils/LoadScript";
import {Loader} from "../../Utils/Loader";
class Login extends Component {
    constructor(props) {
        super(props);
        this.formikRef = React.createRef();
    }
    componentDidMount() {
        labelActive();
        document.title = "Login|| Must Login"
    }
    onButtonClick = () => {
        this.formikRef.current.setSubmitting(false);
        this.props.SetError("");
    };
    render() {
        if (this.props.isAuthenticated) {
            let { from } = this.props.location.state || {
                from: { pathname: "/" }
            };
            return (
                <Redirect
                    to={{
                        pathname: `${from.pathname}`,
                        state: { from: this.props.location }
                    }}
                />
            );
        }
        return (
            <div className="login-page">
                {this.props.serverError && (
                    <div className="server_error_msg">
                        😡😡 {this.props.serverError}
                        <button
                            className="btn btn-warning text-light"
                            onClick={() => this.onButtonClick()}
                        >
                            Try Again
                        </button>
                    </div>
                )}
                <div className="container d-flex align-items-center">
                    <div className="form-holder has-shadow">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-7">
                                <div className="box-conatiner">
                                    <div className="form d-flex align-items-center">
                                        <div className="content">
                                            <h1 className="text-center dev__login mb-3">
                                                LOGIN
                                            </h1>

                                            <Formik
                                                ref={this.formikRef}
                                                initialValues={{
                                                    email: "",
                                                    password: ""
                                                }}
                                                validationSchema={Yup.object().shape(
                                                    {
                                                        email: Yup.string()
                                                            .email()
                                                            .required(
                                                                "Please Enter your Email Address"
                                                            ),
                                                        password: Yup.string()
                                                            .required(
                                                                "Please Enter your password"
                                                            )
                                                            .matches(
                                                                /^[A-Za-zd@$!%*#?&1-9]{6,}$/,
                                                                "Must Contain 6 Characters"
                                                            )
                                                    }
                                                )}
                                                onSubmit={(
                                                    { email, password },
                                                    { setStatus, setSubmitting }
                                                ) => {
                                                    setStatus();
                                                    this.props.loginAction({
                                                        email,
                                                        password
                                                    });
                                                    setTimeout(() => {
                                                        let error = this.props
                                                            .error;
                                                        if (
                                                            error ||
                                                            0 !== error.length
                                                        ) {
                                                            setSubmitting(
                                                                false
                                                            );
                                                            setStatus(error);
                                                        }
                                                    }, 500);
                                                }}
                                                render={({
                                                    errors,
                                                    status,
                                                    touched,
                                                    isSubmitting
                                                }) => (
                                                    <Form id="login-form">
                                                        <div className="form-group">
                                                            <Field
                                                                id="login-username"
                                                                type="email"
                                                                name="email"
                                                                className={
                                                                    "input-material" +
                                                                    (errors.username &&
                                                                    touched.username
                                                                        ? " is-invalid"
                                                                        : "")
                                                                }
                                                                autoComplete="on"
                                                            />
                                                            <label
                                                                htmlFor="login-username"
                                                                className="label-material"
                                                            >
                                                                Email
                                                            </label>
                                                            <ErrorMessage
                                                                name="email"
                                                                component="div"
                                                                className="invalid-feedback dev__invalid"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <Field
                                                                id="login-password"
                                                                type="password"
                                                                name="password"
                                                                className={
                                                                    "input-material" +
                                                                    (errors.username &&
                                                                    touched.username
                                                                        ? " is-invalid"
                                                                        : "")
                                                                }
                                                            />
                                                            <label
                                                                htmlFor="login-password"
                                                                className="label-material"
                                                            >
                                                                Password
                                                            </label>
                                                            <ErrorMessage
                                                                name="password"
                                                                component="div"
                                                                className="invalid-feedback dev__invalid"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-dark btn-block dev__submit"
                                                                disabled={
                                                                    isSubmitting
                                                                }
                                                            >
                                                                {!isSubmitting &&
                                                                    "Log in"}
                                                                {isSubmitting &&  <Loader/>}
                                                            </button>
                                                        </div>
                                                        {status && (
                                                            <div
                                                                className={
                                                                    "alert alert-danger"
                                                                }
                                                            >
                                                                {status}
                                                            </div>
                                                        )}
                                                    </Form>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
    serverError: state.auth.serverError
});
const mapDispatchToProps = dispatch => {
    return {
        loginAction: user => {
            dispatch(loginAction(user, history));
        },
        SetError: err => {
            dispatch(ServerError(err));
        }
    };
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
);
