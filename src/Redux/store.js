import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import getAllArticles from "./reducer";

const inititalState = {};
const middleware = { thunk };
const reducers = combineReducers({
    get: getAllArticles,
});

const store = createStore(
    reducers,
    inititalState,
    compose(
        applyMiddleware(...Object.values(middleware)),
        //logger,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        // Desactiva esta línea si te sale el error TypeError: Cannot read 'apply' of undefined
    )
);

export default store;
