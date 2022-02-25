import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderbackend101.herokuapp.com/",
});

export default instance;
