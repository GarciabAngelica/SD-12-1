// Task 3: addUser(first_name, last_name, email)

import {getServerURL} from "./task1.js";
//se preparan los parametros a ingresar al servidor
export const addUser = async (first_Name, last_Name, email) => {
  const url = getServerURL();
  const newUser = {
    first_Name: "Emma",
    last_Name: "Watson",
    email: "Ewatson@gmail.com",
  };
  //se manda a que los ingrese a users
  const response = await fetch(`${url}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
//addUser("newUser");
