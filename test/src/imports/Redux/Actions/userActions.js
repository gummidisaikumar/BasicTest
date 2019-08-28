export const GET_USER = "GET_USER";

const get_user = (dispatch)=>{
 fetch('https://reqres.in/api/users')
 .then(res=> res.json())
 .then(res=> dispatch({
     type: GET_USER,
     payload: res.data
 }));
}

export default get_user;
