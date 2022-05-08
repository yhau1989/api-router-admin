const axios = require("axios").default;
import { URLS } from "../config";

export const fetchLogin = (user, password) => {
    return axios
      .post('http://10.131.10.209:7101/api/login', {user, password})
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };