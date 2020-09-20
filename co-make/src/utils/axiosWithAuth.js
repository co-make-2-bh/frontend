import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
    baseURL: "",
  });
  //add other axios items here - .post .put .delete etc
};
export default axiosWithAuth;
