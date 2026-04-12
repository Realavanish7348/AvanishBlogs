const LIVE = "https://avanishblogs-backend.onrender.com";
const LOCAL = "http://localhost:5000";

const API_URL = "/api/v1/blogposts";

export const getAllBlogs = async () => {
  const response = await fetch(`${LIVE + API_URL}`);
  const data = await response.json();
  console.log(data);
  return data;
};
