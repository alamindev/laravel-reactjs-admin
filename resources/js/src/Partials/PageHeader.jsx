import React from 'react';
import FontAwesome from 'react-fontawesome'
import {Link} from "react-router-dom";
export default function PageHeader(props) {
    let {TitleIcon, TitleIconName, HeaderTitle, ButtonTitle, LinkName, IconClass, IconName} = props;
    let button = <button className="btn btn-dark btn-outline-black text-secondary"> <FontAwesome className={IconClass} name={IconName} />
        &nbsp; {ButtonTitle}
    </button>;
    return (
        <div className="card block-body">
            <div className="card-body p-2 d-md-flex d-sm-block justify-content-between align-items-center text-center">
                <h4 className="text-capitalize m-0">
                    {TitleIconName && <FontAwesome
                        className={TitleIcon} 
                        name={TitleIconName} 
                    /> }
                    {HeaderTitle}
                </h4>
                {ButtonTitle &&
                    LinkName && <Link to={LinkName}> {button} </Link>
                    || LinkName && {button}
                }
            </div>
        </div>
    )
}
