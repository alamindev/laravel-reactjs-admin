import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../../../Partials/PageHeader";
import { connect } from "react-redux";
var FontAwesome = require("react-fontawesome");
import { Formik } from "formik";
import * as Yup from "yup";
import Basic from "../../../Components/PermissionPage/Basic";
import Crud from "../../../Components/PermissionPage/Crud";
import { ReactSelect } from "../../../Utils/Helper";
import LoadScrollbar from "../../../Utils/Scrollbar";
import { fetchDatabaseTable } from "../../../Store/Actions/RoleAction";
import { addPermission } from "../../../Store/Actions/PermissionAction";
import { toastr } from "react-redux-toastr";
import { Loading } from "../../../Utils/Loader";
class CreatePermission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            permission_type: "crud",
            selectedOption: null,
            options: [],
            showing: false
        };
        this.formikRef = React.createRef();
        this.changeParmissionType = this.changeParmissionType.bind(this);
        this.SelectChange = this.SelectChange.bind(this);
    }
    componentDidMount() {
        document.title = "Add New Permission"
        this.fetchDatabase();
    }
    fetchDatabase() {
        this.props.DataBaseTable().then(() => {
            let tables = this.props.database.tables;
            this.setState({
                options: tables
            });
            this.setState({showing: true})
        });
    }
    changeParmissionType(e) {
        this.setState({
            permission_type: e.target.value
        });
        this.formikRef.current.state.values.name = "";
    }
    SelectChange = selectedOption => {
        this.setState({ selectedOption });
        this.formikRef.current.initialValues = {
            ...this.formikRef.current.initialValues,
            selectVal: selectedOption
        };
        this.formikRef.current.state.errors.table = "";
    };
    render() {
        let validationShape;
        if (this.state.permission_type !== "crud") {
            validationShape = {
                name: Yup.string().required(
                    "Please Enter Permission Display Name"
                ),
            };
        } else {
            validationShape = {
                table_name: Yup.string().required(
                    "Please Write database table name"
                )
            };
        }

        const { selectedOption } = this.state;
        if (this.state.showing) {
        return ( 
            <LoadScrollbar>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <PageHeader
                                LinkName={"/permissions"}
                                HeaderTitle="Add New Permission"
                                ButtonTitle="Back"
                                IconClass="fas fa-caret-left"
                                IconName="caret-left"
                            />
                        </div>
                    </div>
                    <Formik
                        ref={this.formikRef}
                        initialValues={{
                            name: "",
                            table_name: "",
                            slug: "",
                            description: ""
                        }}
                        enableReinitialize={true}
                        validationSchema={Yup.object().shape(validationShape)}
                        onSubmit={(values, actions) => {
                            let initialValue = this.formikRef.current
                                .initialValues;
                            let val = initialValue.selectVal;
                            let table = val.value;
                            let permission_type = this.state.permission_type;
                            if (typeof val === "undefined") {
                                actions.setErrors({
                                    table:
                                        "Please Select a table for permission"
                                });
                                return;
                            }
                            if (this.state.permission_type !== "basic") {
                                let permission = initialValue.permission;
                                if (!permission || !permission.length) {
                                    actions.setErrors({
                                        permission:
                                            "Please Check any one checkbox"
                                    });
                                    return;
                                }
                                let table_name = values.table_name;
                                let newVal = {
                                    table,
                                    table_name,
                                    permission,
                                    permission_type
                                };
                                this.props.addPermission(newVal, res => {
                                    if (res.status == 409) {
                                        toastr.error('ERROR', res.data.errors)
                                    } else if (res.status == 201) {
                                        this.props.history.push('/permissions');
                                        toastr.success('SUCCESS', res.data.success)
                                    }
                                });
                            } else {
                                if (values.slug === "") {
                                    actions.setErrors({
                                        slug:
                                            "Please enter Permission Slug Name"
                                    });
                                    return;
                                }
                                let newVal = {
                                    table,
                                    permission_type,
                                    ...values
                                };
                                this.props.addPermission(newVal, res => {
                                    if (res.status == 409) {
                                        toastr.error('ERROR', res.data.errors)
                                    } else if (res.status == 201) {
                                        this.props.history.push('/permissions');
                                        toastr.success('SUCCESS', res.data.success)
                                    }
                                });
                            }
                        }

                        }
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="basic_or_crud d-flex justify-start">
                                                    <div className="basic">
                                                        <input
                                                            type="radio"
                                                            id="basic"
                                                            name="permission_type"
                                                            onChange={
                                                                this
                                                                    .changeParmissionType
                                                            }
                                                            value="basic"
                                                            checked={
                                                                this.state
                                                                    .permission_type ===
                                                                "basic"
                                                            }
                                                        />
                                                        <label htmlFor="basic">
                                                            Basic Permission
                                                        </label>
                                                    </div>
                                                    <div className="crud pl-2">
                                                        <input
                                                            type="radio"
                                                            id="crud"
                                                            name="permission_type"
                                                            onChange={
                                                                this
                                                                    .changeParmissionType
                                                            }
                                                            value="crud"
                                                            checked={
                                                                this.state
                                                                    .permission_type ===
                                                                "crud"
                                                            }
                                                        />
                                                        <label htmlFor="crud">
                                                            CRUD Permission
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <ReactSelect
                                                    Label={
                                                        "Select Database Table"
                                                    }
                                                    Require={"(Required)"}
                                                    Value={selectedOption}
                                                    ChangeSelect={
                                                        this.SelectChange
                                                    }
                                                    Options={this.state.options}
                                                    Placeholder={
                                                        "Select Database Table..."
                                                    }
                                                    errors={props.errors.table}
                                                />
                                                {this.state.permission_type ===
                                                    "basic" ? (
                                                        <Basic
                                                            errors={props.errors}
                                                            slug={props.values.slug}
                                                            name={props.values.name}
                                                            description={
                                                                props.values
                                                                    .description
                                                            }
                                                            handleChange={
                                                                props.handleChange
                                                            }
                                                        />
                                                    ) : (
                                                        <Crud
                                                            errors={props.errors}
                                                            name={
                                                                props.values
                                                                    .table_name
                                                            }
                                                            handleChange={
                                                                props.handleChange
                                                            }
                                                            Referance={
                                                                this.formikRef
                                                            }
                                                        />
                                                    )}
                                            </div>
                                            <div className="card-footer">
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </LoadScrollbar>
        );
    } else {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <Loading />
            </div>
        )
    }
    }
}
const mapStateToProps = state => ({
    database: state.role.database
});
const mapDispatchToProps = dispatch => {
    return {
        DataBaseTable: () => dispatch(fetchDatabaseTable()),
        addPermission: (permissions, callback) =>
            dispatch(addPermission(permissions, callback))
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CreatePermission)
);
