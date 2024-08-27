import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(Boolean)

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(middleWares)
}
)


export const persistor = persistStore(store)































//  -----------------------------------------First version----------------------------------------- //

// import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import { rootReducer } from "./root-reducer";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const loggerMid = (store) => (next) => (action) => {
//     if (!action.type) next(action)

//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action)

//     console.log('next state: ', store.getState());
// }

// const middleWares = [process.env.NODE_ENV === 'development' && loggerMid].filter(Boolean)

// const composeEnhancer =
//     (process.env.NODE_ENV !== 'production' &&
//         window &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const persistConfig = {
//     key: "root",
//     storage,
//     blacklist: ["user"]
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

// export const persistor = persistStore(store)