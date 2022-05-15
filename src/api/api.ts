import ky from "ky";

const token = localStorage.getItem('token');
const API = ky.create({
  prefixUrl: import.meta.env.VITE_APP_BACKEND_URL,
  headers: {
    'authorization': token ? `Bearer ${token}` : undefined
  },
  throwHttpErrors: false,
  retry: 0,
})

export default API;