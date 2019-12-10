import React from "react";
import { withRouter } from "react-router-dom";
import PageHeader from "../../../Partials/PageHeader";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup"; 
import LoadScrollbar from "../../../Utils/Scrollbar";
import { permissionEdit, updatePermission } from "../../../Store/Actions/PermissionAction";
import { InputField } from "../../../Utils/Helper";
import { toastr } from "react-redux-toastr";
import { Loader, Loading } from "../../../Utils/Loader";
class editPermission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                table: "",
                name: "",
                slug: "",
                description: ""
            },
            showing:false
        }
    }
    componentDidMount() {
        document.title = "edit Permission";
        this.props.permissionEdit(this.props.match.params.id).then(() => {
            let permission = this.props.edit_id;
            this.setState({
                data: {
                    table: permission.per_table,
                    name: permission.display_name,
                    slug: permission.name,
                    description: permission.description,
                }
            })
            this.setState({showing: true})
        });
    }

    render() {
        if (this.state.showing) {
            return (
                <LoadScrollbar>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <PageHeader
                                    LinkName={"/permissions"}
                                    HeaderTitle="Edit Permission"
                                    ButtonTitle="Back"
                                    IconClass="fas fa-caret-left"
                                    IconName="caret-left"
                                />
                            </div>
                        </div>
                        <Formik
                            ref={this.formikRef}
                            initialValues={this.state.data}
                            validationSchema={Yup.object().shape(
                                {
                                    name: Yup.string()
                                        .required(
                                            "Please Enter your Permission Name"
                                        ),
                                }
                            )}
                            enableReinitialize={true}
                            onSubmit={(values, actions) => {
                                this.props.updatePermission(this.props.match.params.id, values, (res) => {
                                    if (res.status == 200) {
                                        toastr.success('UPDATED', res.data.success)
                                        actions.setSubmitting(false)
                                        this.props.history.push('/permissions');
                                      
                                    }
                                })
                            }}
                        >

                            {props => {

                                return (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row mt-2">
                                            <div className="col-lg-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <InputField
                                                            Label={
                                                                "Can't Change table name"
                                                            }
                                                            Type={"text"}
                                                            value={props.values.table}
                                                            name="table"
                                                            id="table"
                                                            disabled={true}
                                                        />
                                                        <InputField
                                                            Label={
                                                                "Name (Human Readable)"
                                                            }
                                                            Required={"*"}
                                                            Type={"text"}
                                                            Placeholder={
                                                                "Example: Create Table"
                                                            }
                                                            onChange={props.handleChange}
                                                            value={props.values.name}
                                                            name="name"
                                                            id="name"
                                                            errors={props.errors.name}
                                                        />
                                                        <InputField
                                                            Label={
                                                                "Slug (Cant Not be changed and always lower case and dash) "
                                                            }
                                                            Type={"text"}
                                                            onChange={props.handleChange}
                                                            value={props.values.slug}
                                                            name="slug"
                                                            id="slug"
                                                            disabled={true}
                                                        />
                                                        <InputField
                                                            Label={
                                                                "Description (Optional)"
                                                            }
                                                            Type={"textarea"}
                                                            onChange={props.handleChange}
                                                            value={props.values.description}
                                                            name="description"
                                                            id="description"
                                                        />
                                                    </div>
                                                    <div className="card-footer">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-dark"
                                                            disabled={
                                                                props.isSubmitting
                                                            }
                                                        >
                                                            {!props.isSubmitting &&
                                                                "Update"}
                                                            {props.isSubmitting && <Loader />}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )
                            }}
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
    edit_id: state.permission.permission
});
const mapDispatchToProps = dispatch => {
    return {
        permissionEdit: id => dispatch(permissionEdit(id)),
        updatePermission: (id, data, callback) => dispatch(updatePermission(id, data, callback))
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(editPermission)
);
