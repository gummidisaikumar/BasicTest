import {GET_USER} from '../Actions/userActions';

const userReducer = (state = {}, { type, payload }) => {
    debugger;
  switch (type) {
    case GET_USER:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
