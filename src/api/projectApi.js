// const API_URL = "http://localhost:5000/api/v1/projectposts";

const API_URL = "https://avanishblogs-backend.onrender.com/api/v1/projectposts";

export const getPojectBlogs = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data;
};

// AIzaSyARZvqmZ8_6NYCF4c9VtZJwvKPLLfXpNOY
