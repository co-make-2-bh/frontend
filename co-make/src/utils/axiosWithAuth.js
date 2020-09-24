import axios from "axios";
/////////////////////
//      AXIOS      //
/////////////////////
const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    baseURL: "https://bw-comakeapp-java.herokuapp.com/",
  });
};
export default axiosWithAuth;
