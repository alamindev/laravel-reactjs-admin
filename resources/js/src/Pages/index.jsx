import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import LoadScrollbar from "../Utils/Scrollbar";
class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        document.title = "Dashboard"
    }
    render() {
        var style = {
            width: '100%',
        };
        return (
           <LoadScrollbar>
                <section className="no-padding-top no-padding-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="statistic-block block">
                                <div className="progress-details d-flex align-items-end justify-content-between">
                                    <div className="title">
                                        <div className="icon"><i className="icon-user-1"></i></div><strong>New Clients</strong>
                                    </div>
                                    <div className="number dashtext-1">27</div>
                                </div>
                                <div className="progress progress-template">
                                    <div role="progressbar" style={style} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" className="progress-bar progress-bar-template dashbg-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
           </LoadScrollbar>
        );
    }
}
export default withRouter(App);