// const API_URL = "http://localhost:5000/api/v1/projectposts";
const LIVE = "https://avanishblogs-backend.onrender.com";
const LOCAL = "http://localhost:5000";

const API_URL = "/api/v1/projectposts";

export const getPojectBlogs = async () => {
  const response = await fetch(LIVE + API_URL);
  const data = await response.json();
  return data.data;
};
