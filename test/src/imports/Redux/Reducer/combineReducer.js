import { combineReducers } from "redux";
import personReducer from "./personReducer";
import addressReducer from "./addressReducer";
import userReducer from "./userReducer";


const allReducer = combineReducers({
  person: personReducer,
  address: addressReducer,
  users: userReducer,
});


export default allReducer;