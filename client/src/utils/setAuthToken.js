import api from "./api";

const setAuthToken = (token) => {
  if (token) {
    var bearerToken = `Bearer ${token}`;
    api.defaults.headers.common["Authorization"] = bearerToken;
    localStorage.setItem("token", bearerToken);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

export default setAuthToken;
