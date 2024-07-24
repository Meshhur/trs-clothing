import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root-saga";
// import { thunk } from "redux-thunk";
// import logger from "redux-logger";

const loggerMid = (store) => (next) => (action) => {
    if (!action.type) next(action)

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action)

    console.log('next state: ', store.getState());
}

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMid, sagaMiddleware].filter(Boolean)

const composeEnhancer =
    (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store) 