import axios from 'axios';

function setToken(token) {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
      localStorage.removeItem('token');
    }
  }

  export default setToken;
  
  // function getToken() {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     // Check if expired, remove if it is
  //     const payload = JSON.parse(atob(token.split('.')[1]));
  //     // JWT's exp is expressed in seconds, not milliseconds, so convert
  //     if (payload.exp < Date.now() / 1000) {
  //       localStorage.removeItem('token');
  //       token = null;
  //     }
  //   }
  //   return token;
  // }
  
  // function getUserFromToken() {
  //   const token = getToken();
  //   return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  // }
  
  // function removeToken() {
  //   localStorage.removeItem('token');
  // }
  
  // export default {
  //   setToken,
  //   getToken,
  //   removeToken,
  //   getUserFromToken
  // };
  