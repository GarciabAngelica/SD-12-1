// Task 4: delUser(number)
import { getServerURL } from "./task1.js";
//se coloca el parámetro por el cual se va a eliminar un dato
export const delUser = async (id) => {
  const url = getServerURL();
  const response = await fetch(`${url}/users/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
  return data;
};
  delUser ("59c9");