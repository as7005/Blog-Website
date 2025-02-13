import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8080/api" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (postData) => API.post("/posts", postData);
export const login = (credentials) => API.post("/auth/login", credentials);
export const signup = (userData) => API.post("/auth/signup", userData);

