import rootReducer from "./rootReducer.js";
import { createStore } from "redux";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log('subscribe fired')
})

export default store;