import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__block  no-margin-bottom">
                    <div className="container-fluid text-center">
                        <p className="no-margin-bottom">Design by <a
                            href="http://alamindevbd.com">Alamin</a>.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default withRouter(Footer)