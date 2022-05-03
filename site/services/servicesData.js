const axios = require("axios").default;
import { TALLERES_URL } from "../config";

export const fetchTalleresList = () => {
    return axios
      .get(TALLERES_URL.URL_GET_TALLERES)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };