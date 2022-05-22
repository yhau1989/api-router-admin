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

  export const fetchAddApp = (app) => {
    return axios
      .post(URLS.URL_ADD_APPS, app)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetchUpdateApp = (app) => {
    return axios
      .post(URLS.URL_EDIT_APPS, app)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetchAddEndpoint = (endpoint) => {
    return axios
      .post(URLS.URL_ADD_ENDPOINTS, endpoint)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };


  export const fetchEditEndpoint = (data) => {
    return axios
      .post(URLS.URL_EDIT_ENDPOINTS, data)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };


  export const fetchGetAppByCode = (codeApp) => {
    return axios
      .get(`${URLS.URL_GET_APP}?codeApp=${codeApp}`)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetchGetEndPointsByIdApp = (idApp) => {
    return axios
      .get(`${URLS.URL_GET_ENDPOINTS_BY_ID_APP}?idApp=${idApp}`)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };

  export const fetchDeleteEndPoint = (id, audit) => {
    return axios
      .post(`${URLS.URL_REMOVE_ENDPOINT}?id=${id}&auditoria=${audit}`)
      .then((response) => {
        return {status: 0, response}
      })
      .catch((error) => {
        return {status: 99, error}
      });
  };


  
export const fetchIp = () => {
  return axios
    .get('https://www.cloudflare.com/cdn-cgi/trace')
    .then((response) => {
      return {status: 0, response}
    })
    .catch((error) => {
      return {status: 99, error}
    });
};

  