import React, { lazy, Suspense, useState } from "react";
import { Switch, Route } from "react-router-dom";
import lazyLoading from "../Partials/LazyLoading";
import ProgressBar from "react-topbar-progress-indicator";
import PrivateRoute from "./Private";
import Login from "../Pages/Auth/Login";
import { SwitchProgress } from "../Partials/Switch"; 
const Home = lazyLoading(() => import("../Pages"), {
    fallback: <ProgressBar />
});
const NotFoundPage = lazyLoading(() => import("../Pages/Errors/404"), {
    fallback: <ProgressBar />
});
const Register = lazyLoading(() => import("../Pages/Auth/Register/Register"), {
    fallback: <ProgressBar />
});
const CreateRole = lazyLoading(() => import("../Pages/Auth/Roles/CreateRole"), {
    fallback: <ProgressBar />
});
const Role = lazyLoading(() => import("../Pages/Auth/Roles/Roles"), {
    fallback: <ProgressBar />
});

const Permission = lazyLoading(
    () => import("../Pages/Auth/Permission/Permissions"),
    { fallback: <ProgressBar /> }
);
const CreatePermission = lazyLoading(
    () => import("../Pages/Auth/Permission/CreatePermission"),
    { fallback: <ProgressBar /> }
);
const viewPermission = lazyLoading(
    () => import("../Pages/Auth/Permission/ViewPermission"),
    { fallback: <ProgressBar /> }
);
const editPermission = lazyLoading(
    () => import("../Pages/Auth/Permission/EditPermission"),
    { fallback: <ProgressBar /> }
);


const Contact = lazyLoading(() => import("../Pages/Contact/Contact"), {
    fallback: <ProgressBar />
});
const Routes = props => {
    return (
        <SwitchProgress>
            <Route path="/login" component={Login} />
              {/* start coding for All related Routes  */}
            <PrivateRoute path="/" component={Home} exact={true} />
            <PrivateRoute path="/contact" component={Contact} />
            <PrivateRoute path="/register" component={Register} />
            {/* start coding for Role  related Routes  */}
            <Route
                path="/Roles"
                render={({ match: { url } }) => (
                    <>
                        <PrivateRoute path={`${url}/`} component={Role} exact />
                        <PrivateRoute
                            path={`${url}/create`}
                            component={CreateRole}
                        />
                    </>
                )}
            />
            {/* start coding for Permissions related Routes  */}
            <Route
                path="/permissions"
                render={({ match: { url } }) => (
                    <>
                        <PrivateRoute
                            path={`${url}/`}
                            component={Permission}
                            exact
                        />
                        <PrivateRoute
                            path={`${url}/create`}
                            component={CreatePermission}
                        />
                        <PrivateRoute
                            path={`${url}/view/:id`}
                            component={viewPermission}
                        />
                        <PrivateRoute
                            path={`${url}/:id/edit/`}
                            component={editPermission}
                        />
                    </>
                )}
            />
            <PrivateRoute path="*" component={NotFoundPage} />
        </SwitchProgress>
    );
};
export default Routes;
