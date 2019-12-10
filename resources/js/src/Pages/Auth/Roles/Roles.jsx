import React from "react";
import FontAwesome from "react-fontawesome";
import { withRouter, Redirect, Link } from "react-router-dom";
import Datatable from "../../../Components/Datatable/Datatable";
import { Breadcrumb } from "../../../Utils/Helper";
import { connect } from "react-redux";
import { btnClick } from "../../../Store/Actions/RoleAction";
import LoadScrollbar from '../../../Utils/Scrollbar';

const data = [
    { id: 1, title: "Conan the Barbarian", year: "1982" },
    { id: 2, title: "Conan the Barbarian", year: "1982" },
    { id: 3, title: "Conan the Barbarian", year: "1982" },
    { id: 4, title: "Conan the Barbarian", year: "1982" }
];
const columns = [
    {
        name: "Title",
        selector: "title",
        sortable: true
    },
    {
        name: "Year",
        selector: "year",
        sortable: true,
        right: true
    },
    {
        name: "Manage",
        selector: "manage",
        sortable: true,
        cell: row => (
            <div>
                <button className="btn btn-success" id={row.id}>
                    <FontAwesome className="fas fa-eye text-light" name="eye" />
                </button>
            </div>
        )
    }
];
class Role extends React.Component {
    componentDidMount(){
        document.title = "All Roles"
    }
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
                                                All Roles
                                            </strong>
                                        </h4>
                                        <Link to="/roles/create">
                                            <button className="btn btn-dark btn-outline-black text-secondary">
                                                <strong>
                                                    <FontAwesome
                                                        className="fas fa-plus"
                                                        name="plus"
                                                    />
                                                    Add New Role
                                                </strong>
                                            </button>
                                        </Link>
                                    </div>
                                    <h3 className="text-danger text-center">Coming Soon</h3>
                                    <div className="card-body">
                                        <Datatable
                                            columns={columns}
                                            data={data}
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

const mapDispatchToProps = dispatch => {
    return {
        btnClick: () => {
            dispatch(btnClick());
        }
    };
};
export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Role)
);
