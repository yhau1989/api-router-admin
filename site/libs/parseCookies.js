import cookie from "cookie"



/**
 * funcion generica para trabajar con las cookies
 */
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}