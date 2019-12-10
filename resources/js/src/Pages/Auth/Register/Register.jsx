import React from 'react' 
import Avatar from 'react-avatar-edit'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import Form from '../../../Components/RegisterPage/Form';
import PhotoUpload from '../../../Components/RegisterPage/PhotoUpload';
import {registerAction} from "../../../Store/Actions/AuthAction"; 
import LoadScrollbar from '../../../Utils/Scrollbar';
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            preview: null,
            src: '',
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
            c_password: "",
            error: {}
        }

        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentDidMount(){
        document.title = "Register New User";
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
            return {
                error: nextProps.error
            };
        }
        return null;
    }

    onClose() {
        this.setState({preview: null})
    }
    onCrop(preview) {
        this.setState({preview})
        console.log(this.state.preview);
    }

    onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 71680) {
            elem.target.value = "";

        };
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,

        });
        if (Object.keys(this.state.error).length !== 0) {
            this.setState({error: this.state.error[event.target.name] = ''});
        }
    };
    submitHandler = event => {
        event.preventDefault();
        let {name, email, phone, address, password, c_password} = this.state
        this.props.registerAction({name, email, phone, address, password, c_password}, this.props.history);

    };
    render() { 
    return (
            <LoadScrollbar>
            <div className="container" > 
                <form onSubmit={this.submitHandler}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="block">
                                <div className="title"><strong className="d-block">Register Form</strong> </div>
                                <Form
                                    changeHandler={this.changeHandler}
                                    name={this.state.name}
                                    email={this.state.email}
                                    phone={this.state.phone}
                                    address={this.state.address}
                                    password={this.state.password}
                                    c_password={this.state.c_password}
                                    errors={this.state.error}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="block">
                                <div className="title"><strong className="d-block">Avater Upload</strong> </div>
                                <PhotoUpload
                                    width={300}
                                    height={300}
                                    onCrop={this.onCrop}
                                    onClose={this.onClose}
                                    onBeforeFileLoad={this.onBeforeFileLoad}
                                    src={this.state.src}
                                    preview={this.state.preview}
                                />
                            </div>
                            <div className="block">
                                <div className="title"><strong className="d-block">Roles</strong> </div>
                                <h3 className="text-danger">Coming Soon</h3>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </LoadScrollbar>
        )
    }

}

Register.propTypes = {
    error: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    error: state.auth.regester_error,
});
const mapDispatchToProps = (dispatch) => {
    return {
        registerAction: (user, history) => {
            dispatch(registerAction(user, history));
        },
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register))