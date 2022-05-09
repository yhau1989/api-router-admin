const axios = require("axios").default;
import { URLS } from "../config";

export const fetchLogin = (user, password) => {
    return axios
      .post(URLS.URL_LOGIN, {user, password})
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetGetAllEndPoints = () => {
    return axios
      .get(URLS.URL_GET_ALL_ENDPOINTS)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetGetAllApps = () => {
    return axios
      .get(URLS.URL_GET_ALL_APPS)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };