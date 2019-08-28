import {UPDATE_PERSON} from '../Actions/personActions';

const personReducer = (state = {}, { type, payload }) => {
    debugger;
  switch (type) {
    case UPDATE_PERSON:
      return { name: payload , isLogin: true};

    default:
      return state;
  }
};

export default personReducer;
