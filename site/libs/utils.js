/**
 * funcion generica para crear un id de app general
 */
export function generateApp() {
    let d = new Date();
    return `APP${d.getFullYear()}${d.getMonth().toString().padStart(2, '0')}${d.getDate().toString().padStart(2, '0')}${d.getHours()}${d.getMinutes()}${d.getSeconds()}${d.getMilliseconds()}`;
}