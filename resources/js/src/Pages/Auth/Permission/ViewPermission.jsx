import React from "react";
import FontAwesome from "react-fontawesome";
import { withRouter, Link } from "react-router-dom";
import LoadScrollbar from "../../../Utils/Scrollbar";
import { getPermissionByid } from "../../../Store/Actions/PermissionAction";
import { connect } from "react-redux"; 
import { Loading } from "../../../Utils/Loader";

class viewPermission extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            showing: false
        };
    }
    componentDidMount() {
        document.title = "View Permission"
        this.props.getPermissionByid(this.props.match.params.id).then(res => {
            let permission = this.props.getDataByid;
            this.setState({
                data: permission
            });
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
                                                    View Permission
                                            </strong>
                                            </h4>
                                            <Link to="/permissions">
                                                <button className="btn btn-dark btn-outline-black text-secondary">
                                                    <strong>
                                                        <FontAwesome
                                                            className="fas fa-arrow-left"
                                                            name="arrow-left"
                                                        />
                                                        Back
                                                </strong>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="card-body">
                                            <table
                                                v-if={this.state.data}
                                                className="table table-striped"
                                            >
                                                <tbody>
                                                    <tr>
                                                        <td>ID</td>
                                                        <td>
                                                            {this.state.data.id}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Slug</td>
                                                        <td>
                                                            {this.state.data.name}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Display Name</td>
                                                        <td>
                                                            {
                                                                this.state.data
                                                                    .display_name
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Permission Table</td>
                                                        <td>
                                                            {
                                                                this.state.data
                                                                    .per_table
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Description</td>
                                                        <td>
                                                            {
                                                                this.state.data
                                                                    .description
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date</td>
                                                        <td>
                                                           
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LoadScrollbar>
            );
        }else{
            return (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <Loading/>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    getDataByid: state.permission.permission
});
const mapDispatchToProps = dispatch => {
    return {
        getPermissionByid: id => dispatch(getPermissionByid(id))
    };
};
export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(viewPermission)
);
