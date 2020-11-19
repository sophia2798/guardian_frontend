import axios from "axios";

export default {
  getUserInfo: function () {
    return axios.get("localhost:9164/api/userInfo");
  },
};
