import { combineReducers } from "redux";
import { userReducer } from "./user/User.reducer.js";
import { categoriesReducer } from "./categories/category.reducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
})