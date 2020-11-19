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
  addMember: function(token, tripID,newMember) {
      return fetch(`${API_PREFIX}/trips/add/${tripID}`, {
          method: `PUT`,
          headers: {
              'authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMember)
      }).then(res => res.json()).catch(err => null)
  },
};

module.exports = API;
