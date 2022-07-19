const axios = require("axios").default;
import {
  URLS
} from "../config";

/**
 * Invoca al api del backend para hacer proceso de login
 * @param  {} user
 * @param  {} password
 */
export const fetchLogin = (user, password) => {
  return axios
    .post(URLS.URL_LOGIN, {
      user,
      password
    })
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend para invocar los endpoints de un aplicativo
 */
export const fetGetAllEndPoints = () => {
  return axios
    .get(URLS.URL_GET_ALL_ENDPOINTS)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend para todos los aplicativos
 */
export const fetGetAllApps = () => {
  return axios
    .get(URLS.URL_GET_ALL_APPS)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend agregar un aplicativo
 * @param  {} app
 */
export const fetchAddApp = (app) => {
  return axios
    .post(URLS.URL_ADD_APPS, app)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend editar un aplicativo
 * @param  {} app
 */
export const fetchUpdateApp = (app) => {
  return axios
    .post(URLS.URL_EDIT_APPS, app)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend agregar endpoints de un aplicativo
 * @param  {} endpoint
 */
export const fetchAddEndpoint = (endpoint) => {
  return axios
    .post(URLS.URL_ADD_ENDPOINTS, endpoint)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend editar el endpoint de un aplicativo
 * @param  {} data
 */
export const fetchEditEndpoint = (data) => {
  return axios
    .post(URLS.URL_EDIT_ENDPOINTS, data)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend consultar todos los datos de un aplicativo por el código
 * @param  {} codeApp
 */
export const fetchGetAppByCode = (codeApp) => {
  return axios
    .get(`${URLS.URL_GET_APP}?codeApp=${codeApp}`)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend para consultar los endpoints de un aplicativo
 * @param  {} idApp
 */
export const fetchGetEndPointsByIdApp = (idApp) => {
  return axios
    .get(`${URLS.URL_GET_ENDPOINTS_BY_ID_APP}?idApp=${idApp}`)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api del backend para eliminar un endpoin de un aplicativo
 * @param  {} id
 * @param  {} audit
 */
export const fetchDeleteEndPoint = (id, audit) => {
  return axios
    .post(`${URLS.URL_REMOVE_ENDPOINT}?id=${id}&auditoria=${audit}`)
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};


/**
 * Invoca al api de cloudfare para obetener la ip del cliente desde el navegador
 */
export const fetchIp = () => {
  return axios
    .get('https://www.cloudflare.com/cdn-cgi/trace')
    .then((response) => {
      return {
        status: 0,
        response
      }
    })
    .catch((error) => {
      return {
        status: 99,
        error
      }
    });
};