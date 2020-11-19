import axios from "axios";

export default {
  getAllTrips: function () {
    return axios.get("localhost:9164/api/trips");
  },
  getOneTrip: function (id) {
    return axios.get(`/api/trips/${id}`);
  },
};
