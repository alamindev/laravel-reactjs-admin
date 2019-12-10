import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Routes/Router";
import { ThroughProvider } from "react-through";
import { Provider } from "react-redux";
import { getCookie } from "./Utils/Cookie";
import { userConstant } from "./Store/Actions/Types";
import setAuthToken from "./Utils/SetAuthToken";
import configureStore, { history } from "./Store";
import ReduxToastr from "react-redux-toastr";
import { ConnectedRouter } from "connected-react-router";

const store = configureStore();
/**
 * get token from cookie and
 * dispatch from store
 */
const userToken = getCookie("userToken");
if (userToken) {
    const userData = JSON.parse(userToken);
    const token = userData.token;
    if (token) {
        setAuthToken(token);
        store.dispatch({
            type: userConstant.LOGIN_REQUEST,
            payload: {
                user: userData.user
            }
        });
    }
}

const theApp = (
    <Provider store={store}>
        <div>
            <ThroughProvider>
                <ConnectedRouter history={history}>
                    <AppRouter />
                </ConnectedRouter>
            </ThroughProvider>
            <ReduxToastr
                timeOut={5000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                getState={state => state.toastr}
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick
            />
        </div>
    </Provider>
);
ReactDOM.render(theApp, document.querySelector("#app"));
