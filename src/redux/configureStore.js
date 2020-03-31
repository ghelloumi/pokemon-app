import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import reducers from "./reducers";
import {getFavList} from "../utils/helpers";

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

export default function configureStore(preloadedStore = getFavList()) {
    return createStore(
        reducers,
        preloadedStore,
        applyMiddleware(thunk, logger),
    )
}
