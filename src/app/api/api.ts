import axios, {AxiosInstance} from 'axios';
import { getToken } from 'src/shared/token';

const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
const TIME_OUT = 5000;

export const createApi = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    }
  );
  return api;
};

