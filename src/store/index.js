import { combineReducers, createStore } from "redux";
import authReducer from "./reducer/authReducer";
import courseReducer from "./reducer/CourseReducer";

// const reducer = combineReducers({
//     auth: authReducer,
//     course: courseReducer
// })

const store = createStore(authReducer);

export default store;