import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default customFetch;

export const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user || null;
};

export const removeLocalStorage = () => {
  localStorage.removeItem("user");
};
