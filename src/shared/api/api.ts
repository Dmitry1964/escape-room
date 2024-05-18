import axios, {AxiosInstance} from 'axios';
import { BACKEND_URL, TIME_OUT } from 'src/shared/constans/constans';


export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIME_OUT,
  });
  return api;
}
