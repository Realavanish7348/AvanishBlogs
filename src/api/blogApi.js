// const API_URL = "http://localhost:5000/api/v1/blogposts";
const API_URL = "https://avanishblogs-backend.onrender.com/api/v1/blogposts";

export const getAllBlogs = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  return data;
};
