// Task 2: listUsers()

//importamos el url de task1.js
import {getServerURL} from "./task1.js";

//preparamos para exportar cuando se necesite
//solicitamos los datos del servidor de users
export const listUsers = async () => {
    const url = getServerURL();
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    console.log(data);
}