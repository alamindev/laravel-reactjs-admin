import React, { Fragment } from "react";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { NavLink, withRouter } from "react-router-dom";
import routes from '../Routes/BreadcrumbRoute'

// map & render your breadcrumb components however you want.
const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
    <div className="page-header d-flex">
        <i className="fa fa-home" style={{ fontSize: "22px" }}></i>
        {breadcrumbs.map((crumb, i, arr) => {
            const isLastElement = arr.length - 1 === i; 
            let LinkElement = Fragment;
            let props = {}; 
            if (!isLastElement) {
                LinkElement = NavLink;
                props = { href: crumb.match.url, to: crumb.match.url };
            } 
            return (
                <Fragment key={crumb.match.url}>
                    <LinkElement {...props}>
                        <div className="container-fluid">
                            {crumb.breadcrumb}
                        </div>
                    </LinkElement>
                    {!isLastElement && "/ "}
                </Fragment>
            );
        })}
    </div>
));
export default withRouter(Breadcrumbs);
 