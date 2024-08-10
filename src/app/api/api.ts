import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
const TIME_OUT = 5000;

export const createApi = () : AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT,
  });
  return api;
};

