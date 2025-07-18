let API_ROOT = "";

if (import.meta.env.MODE === "development") {
  API_ROOT = "http://localhost:3000";
}
if (import.meta.env.MODE === "production") {
  API_ROOT = "https://hungnguyen1611.online/api/profile";
}

export default API_ROOT;
