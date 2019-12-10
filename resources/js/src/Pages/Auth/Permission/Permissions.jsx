import React from "react";
import FontAwesome from "react-fontawesome";
import { withRouter, Redirect, Link } from "react-router-dom";
import Datatable from "../../../Components/Datatable/Datatable";
import { memoize } from 'react-data-table-component';
import LoadScrollbar from "../../../Utils/Scrollbar";
import { fetchPermissions, deletePermission } from "../../../Store/Actions/PermissionAction";
import { connect } from "react-redux";
 
import { Sweetalert } from "../../../Utils/Helper";
import { toastr } from "react-redux-toastr";

const columns = memoize(clickHandler => [
    {
        name: "SL",
        selector: "id",
        sortable: true
    },
    {
        name: "Name",
        selector: "display_name",
        sortable: true
    },
    {
        name: "Slug",
        selector: "name",
        sortable: true
    },
    {
        name: "Year",
        sortable: true,
        cell: row =>  {row.created_at} 
    },
    {
        name: "Manage",
        selector: "manage",
        ignoreRowClick: true,
        cell: row => (
            <div>
                <Link to={"/permissions/view/" + row.id}>
                    <button className="btn custom_home_btn_view" id={row.id}>
                        <FontAwesome
                            className="fas fa-eye text-light"
                            name="eye"
                        />
                    </button>
                </Link>
                <Link to={"/permissions/" + row.id + "/edit"} >
                    <button className="btn custom_home_btn_edit" id={row.id}>
                        <FontAwesome
                            className="fas fa-edit text-light"
                            name="edit"
                        />
                    </button>
                </Link>
                <button className="btn custom_home_btn_delete" onClick={clickHandler} id={row.id} >
                    <FontAwesome
                        className="fas fa-trash text-light"
                        name="trash"
                        id={row.id}
                        onClick={clickHandler}
                    />
                </button>
            </div>
        ),


    }
]);
class Permission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidMount() {
        document.title = "All Permissions"
        this.fetchPermissions();
    }
    fetchPermissions() {
        this.props.fetchPermissions().then(() => {
            let permissions = this.props.allpermissions.permissions;
            this.setState({
                data: permissions
            });
        });
    }
    handleButtonClick = (state) => {
        state.stopPropagation()
        if (state.target.id) {
           let id = state.target.id;
            Sweetalert((alert, result) => {
                
                if (result.value == true) { 
                    this.props.deletePermission(id, (res) => {
                        if (res.status === 200) {
                            toastr.success('SUCCESS', res.data.success)
                            this.fetchPermissions()
                        }
                    });
                }
                if (result.dismiss == 'cancel') {
                    alert.fire(
                        'Cancelled',
                        'Your imaginary Data is safe :)',
                        'error'
                    )
                }
            }, 'Are you sure');
        }
    };
    render() {
        return (
            <LoadScrollbar>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="block-body">
                                <div className="card">
                                    <div className="card-header d-md-flex d-sm-block justify-content-between text-center align-items-center">
                                        <h4 className="title m-0">
                                            <strong>
                                                <FontAwesome
                                                    className="fas fa-chess-board"
                                                    name="board"
                                                    size="2x"
                                                />
                                                All Permission
                                            </strong>
                                        </h4>
                                        <Link to="/permissions/create">
                                            <button className="btn btn-dark btn-outline-black text-secondary">
                                                <strong>
                                                    <FontAwesome
                                                        className="fas fa-plus"
                                                        name="plus"
                                                    />
                                                    Add Permission
                                                </strong>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <Datatable
                                            columns={columns(this.handleButtonClick)}
                                            data={this.state.data}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LoadScrollbar>
        );
    }
}

const mapStateToProps = state => ({
    allpermissions: state.permission
});
const mapDispatchToProps = dispatch => {
    return {
        fetchPermissions: () => dispatch(fetchPermissions()),
        deletePermission: (id, callback) => dispatch(deletePermission(id, callback))
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Permission)
);

