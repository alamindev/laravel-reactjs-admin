import React from 'react';
import {Switch, withRouter} from "react-router-dom";
export const SwitchProgress = withRouter(props => {
    return (
        <React.Fragment>
            <Switch>
                {props.children}
            </Switch>
        </React.Fragment>
    )
});