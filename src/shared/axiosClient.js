import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data && data.access_token) {
      localStorage.setItem("ACCESS_TOKEN", data.access_token);
    }

    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
    } else if (response.status === 404) {
      console.log("Not Found");
    }

    throw error;
  }
);

export default axiosClient;
