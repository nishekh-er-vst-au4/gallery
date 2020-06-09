import { combineReducers } from "redux";
import imageReducer from "./reducers/image-reducer";

export default combineReducers({
  image: imageReducer,
});
