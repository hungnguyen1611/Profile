let API_ROOT = "";

if (import.meta.env.MODE === "development") {
  API_ROOT = "http://localhost:3000";
}
if (import.meta.env.MODE === "production") {
  API_ROOT = "https://profile-api-wn2d.onrender.com";
}

export default API_ROOT;
