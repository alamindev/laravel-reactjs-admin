import React from 'react'
import { withRouter, Link } from "react-router-dom";
import BsModal from '../../../Components/Modal/BsModal';
import Checkbox from '../../../Components/Checkbox/CheckboxComponent';
import { fetchDatabaseTable } from "../../../Store/Actions/RoleAction";
import { connect } from 'react-redux'; 
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { bindActionCreators } from 'redux'
var FontAwesome = require('react-fontawesome');

import { InputField, ReactSelect } from '../../../Utils/Helper';
import PageHeader from '../../../Partials/PageHeader';
import LoadScrollbar from '../../../Utils/Scrollbar';


class CreateRole extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            checked: true,
            selectedOption: null,
            options: []
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.CheckAll = this.CheckAll.bind(this);
    }
    componentDidMount() {
        this.fetchDatabase();
        document.title = "Create New Role"

    }

    fetchDatabase() {
        this.props.DataBaseTable().then(() => {
            let tables = this.props.database.tables
            this.setState({
                options: tables
            })
        });
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        })

    }
    handleCheck(e) {
        this.setState({
            checked: e.target.checked
        })
    }
    SubmitData(e) {
        e.preventDefault()
        setTimeout(() => {
            this.setState({
                modal: false,
            })
        }, 1000);
    }
    SubmitRoleData(e) {
        e.preventDefault();

    }
    CheckAll(formname, checktoggle) {
        let checkboxes = new Array();
        checkboxes = document[formname].getElementsByTagName('input');
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == 'checkbox') {
                checkboxes[i].checked = checktoggle;
            }
        }
    }
    SelectChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <LoadScrollbar>
                <div className="container" >
                    <form name="role-form" onSubmit={this.SubmitRoleData}>
                        <div className="row">
                            <div className="col-lg-12">
                                <PageHeader
                                    LinkName={'/roles'}
                                    TitleIcon="fab fa-plus"
                                    TitleIconName="plus"
                                    HeaderTitle="Add New Role"
                                    ButtonTitle="Back"
                                    IconClass="fas fa-caret-left"
                                    IconName="caret-left"
                                />
                                <div className="row">
                                    <div className="col-xs-12 col-md-4 col-lg-4 col-xl-4">
                                        <div className="card mt-2 p-2">
                                            <div className="card-header">
                                                <div className="title d-flex align-items-center"><strong className="d-block"><FontAwesome className="fas fa-server" name="fa-server" /> Fillup this form</strong></div>
                                            </div>
                                            <div className="block-body pt-2">
                                                <InputField
                                                    Label={'Name (Human Readable) *'}
                                                    Type={'text'}
                                                    Name={'display_name'}
                                                    Placeholder={'example:- SupperAdmin'}
                                                />
                                                <InputField
                                                    Label={'Slug (Cant Not be changed) *'}
                                                    Type={'text'}
                                                    Name={'name'}
                                                    Placeholder={'example:- SupperAdmin'}
                                                />
                                                <InputField
                                                    Label={'Description (Optional)'}
                                                    Type={'text'}
                                                    Name={'name'}
                                                    Placeholder={'example:- SupperAdmin'}
                                                />
                                                <InputField
                                                    Label={'Description (Optional)'}
                                                    Type={'textarea'}
                                                    Name={'name'}
                                                    Value={'name'}
                                                />

                                                <div className="form-group">
                                                    <input type="submit" value="Save" className="btn btn-dark btn-block text-secondary" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-8 col-lg-8 col-xl-8">
                                        <div className="card mt-2">
                                            <div className="card-body">
                                                <p className="text-danger">If You Are Not Show Permission Table click the button below select a table</p>
                                                <BsModal
                                                    btnClassName={'btn btn-dark text-secondary waves-effect waves-dark btn-block'}
                                                    ButtonLabel={'Add Permission Table'}
                                                    ClassName={'alamin'}
                                                    Title={'this is my modal'}
                                                    FooterBtnTxt={'Save'}
                                                    FooterBtnCancel={'Cancel'}
                                                    onClick={() => this.toggle.bind(this)}
                                                    Modal={this.state.modal}
                                                    SubmitData={() => this.SubmitData.bind(this)}
                                                >
                                                    <ReactSelect
                                                        Value={selectedOption}
                                                        ChangeSelect={this.SelectChange}
                                                        Options={this.state.options}
                                                        Placeholder={'Select Database...'}
                                                    />
                                                </BsModal>

                                            </div>
                                        </div>
                                        <div className="card mt-2">
                                            <div className="card-body">
                                                <div id="checkbox" className="check_all">
                                                    <div className="border-bottom_custom">
                                                        <button className="custom_button_1 custom_button_sm mr-2" onClick={() => { this.CheckAll('role-form', true) }}>Check all</button>
                                                        <button className="custom_button_2 custom_button_sm" onClick={() => { this.CheckAll('role-form', false) }}>Uncheck all</button>
                                                    </div>
                                                    <ul className="list-unstyled d-flex flex-wrap mt-3">
                                                        <li className="w-50 mb-2 form-group">
                                                            <div id="admins">
                                                                <h5 htmlFor="permission" className=" text-muted"> Permission <span className="text-primary">admins</span> Table</h5>
                                                                <div className="d-flex mb-3">
                                                                    <a href="#admins" className="btn btn-outline-success waves-effect waves-light btn-sm mr-3" id="checkall" data-toggle="checkboxes" data-action="check">check</a>
                                                                    <a href="#admins" className="btn btn-outline-warning  waves-effect waves-light btn-sm" id="checkall" data-toggle="checkboxes" data-action="uncheck">uncheck</a>
                                                                </div>
                                                                <div className="i-checks">
                                                                    <input id="1" type="checkbox" className="checkbox-template" name="permission[]" value="1" data-parsley-multiple="permission" data-parsley-id="11" />
                                                                    <label htmlFor="1">Index Admins </label>
                                                                </div>
                                                                <div className="i-checks">
                                                                    <input id="2" type="checkbox" className="checkbox-template" name="permission[]" value="2" data-parsley-multiple="permission" />
                                                                    <label htmlFor="2">Create Admins </label>
                                                                </div>
                                                                <div className="i-checks">
                                                                    <Checkbox checked={this.state.checked} onChange={this.handleCheck} id="unchecked" label="read admins" name="checkbox" />
                                                                    <label htmlFor="3">Read Admins </label>
                                                                </div>
                                                                <div className="i-checks">
                                                                    <input id="4" type="checkbox" className="checkbox-template" name="permission[]" value="4" data-parsley-multiple="permission" />
                                                                    <label htmlFor="4">Update Admins </label>
                                                                </div>
                                                                <div className="i-checks">
                                                                    <input id="5" type="checkbox" className="checkbox-template" name="permission[]" value="5" data-parsley-multiple="permission" />
                                                                    <label htmlFor="5">Delete Admins </label>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </LoadScrollbar>
        )
    }
}
const mapStateToProps = state => ({
    database: state.role.database,
});
const mapDispatchToProps = (dispatch) => {
    return {
        DataBaseTable: () => dispatch(fetchDatabaseTable()),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRole)) 