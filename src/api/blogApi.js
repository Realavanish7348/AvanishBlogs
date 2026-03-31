const API_URL = "http://localhost:5000/api/v1/recentblogs";

export const getAllRecentBlogs = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.data;
};
