import axios from "axios";

const baseURL = import.meta.env.DEV ? "/api" : import.meta.env.VITE_API_URL;

if (!baseURL) {
  throw new Error("VITE_API_URL is not set for this build");
}

export const apiClient = axios.create({ baseURL });
