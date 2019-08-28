import {ADDRESS_UPDATE} from '../Actions/addressActions';

const addressReducer = (state = {}, { type, payload }) => {
   switch (type) {
       case ADDRESS_UPDATE:
       return {address: payload}
   
       default:
       return state;
   } 
};

export default addressReducer;
