import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { NavLink   } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Footer from "./Footer"; //partial
class sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        };
    }

    classActive() {
        this.setState({ isActive: !this.state.isActive });
    }

    componentDidMount() {
        let nodes = document.querySelectorAll(".sub_li_item");
        for (let node of nodes) {
            let classfind = node.children[0].classList.contains("active");
            if (classfind) {
                this.setState({ isActive: true });
            }
        }
        let nav_items = document.querySelectorAll("#find_all_nav_item");
        for (let item of nav_items) {
            for (let child of item.children) {
                let check = child.classList.contains("dropdown_start");
                if (!check) {
                    child.addEventListener("click", () => {
                        this.setState({ isActive: false });
                    });
                }
            }
        }
    }

    render() {
        let dev_slimscrioll = "dev_scroll";
        return (
            <nav id="sidebar">
                <div className="sidebar-header d-flex align-items-center">
                    <div className="avatar">
                        <img
                            src="assets/img/avatar-6.jpg"
                            alt="..."
                            className="img-fluid rounded-circle"
                        />
                    </div>
                    <div className="title">
                        <h1 className="h5">Mark Stephen</h1>
                        <p>Web Designer</p>
                    </div>
                </div>
                <span className="heading">Main</span>
                <PerfectScrollbar className={dev_slimscrioll}>
                    <ul className="list-unstyled" id="find_all_nav_item">
                        <li>
                            <NavLink activeClassName="active" exact to={"/"}>
                                <i className="icon-home"></i>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/permissions"}  activeClassName="active">
                                <i className="icon-home"></i>Permission
                            </NavLink>
                        </li>
                     
                        <li>
                            <NavLink
                                activeClassName="active"
                                exact
                                to={"/roles"}
                            >
                                <i className="icon-home"></i>Roles
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                exact
                                to={"/register"}
                            >
                                <i className="icon-home"></i>Register
                            </NavLink>
                        </li>

                        <li className="dropdown_start">
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={this.classActive.bind(this)}
                                aria-expanded={
                                    this.state.isActive === true
                                        ? "true"
                                        : "false"
                                }
                                data-toggle="collapse"
                                className={
                                    this.state.isActive === true
                                        ? "collapsed"
                                        : ""
                                }
                            >
                                <i className="icon-windows"></i>dropdown
                            </a>
                            <ul
                                className={
                                    this.state.isActive === true
                                        ? "collapse list-unstyled show"
                                        : "collapse list-unstyled"
                                }
                            >
                                <li className="sub_li_item">
                                    <NavLink
                                        activeClassName="active"
                                        exact
                                        to={"/contactasd"}
                                    >
                                        <i className="icon-home"></i>Errors
                                    </NavLink>
                                </li>
                                {/* <li className="sub_li_item">
                                    <NavLink
                                        activeClassName="active"
                                        exact
                                        to={"/contact"}
                                    >
                                        <i className="icon-home"></i>Contact
                                    </NavLink>
                                </li> */}
                            </ul>
                        </li>
                        {/* <li>
                            <a href="login.html">
                                <i className="icon-logout"></i>Login page
                            </a>
                        </li> */}
                    </ul>
                </PerfectScrollbar>
                <Footer />
            </nav>
        );
    }
}

export default withRouter(sidebar);
