import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './Reducers/RootReducers';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
export const history = createBrowserHistory()

import {loadingBarMiddleware} from 'react-redux-loading-bar'
import {createLogger} from 'redux-logger'
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                promise,
                createLogger({collapsed: true}),
                loadingBarMiddleware(),
                routerMiddleware(history),
            ),
        ), 
    )


    return store
} 
