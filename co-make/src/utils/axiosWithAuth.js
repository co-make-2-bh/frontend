import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
  //add other axios items here - .post .put .delete etc
};
