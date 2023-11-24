import { combineReducers } from "redux";
import countReducer from "./reducers/countReducer";
import postReducer from "./reducers/postRedeucer";
import photoReducer from "./reducers/photoRedeucer";


const rootReducer = combineReducers({
  count: countReducer,
  post: postReducer,
  photo: photoReducer
});

export default rootReducer;
