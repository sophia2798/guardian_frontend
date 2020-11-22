const API_PREFIX = "http://localhost:9164/api";

const API = {
  login: function (userData) {
    return fetch(`${API_PREFIX}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  getProfile: function (token) {
    return fetch(`${API_PREFIX}/userInfo`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  deleteTrip: function (token, TripID) {
    return fetch(`${API_PREFIX}/trips/${TripID}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  createTrip: (token, tripData) => {
    return fetch(`${API_PREFIX}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tripData),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  signup: function (userData) {
    return fetch(`${API_PREFIX}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  addMember: function (token, tripID, newMember) {
    return fetch(`${API_PREFIX}/trips/add/${tripID}`, {
      method: `PUT`,
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  updateWhiteboard: function (token, tripID, report_doc) {
    return fetch(`${API_PREFIX}/trips/${tripID}`, {
      method: `PUT`,
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report_doc),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  updateTripDates: function (token, tripID, start_date, end_date) {
    return fetch(`${API_PREFIX}/trips/dates/${tripID}`, {
      method: `PUT`,
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_date: start_date,
        end_date: end_date,
      }),
    })
      .then((res) => res.json())
      .catch((err) => null);
  },
  getOneTrip: function(token, tripID) {
      return fetch(`${API_PREFIX}/trips/${tripID}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
      }).then(res => res.json()).catch(err => null)
  }
};

module.exports = API;
