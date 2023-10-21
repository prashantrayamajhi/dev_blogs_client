import axios from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : "http://localhost:8080/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
