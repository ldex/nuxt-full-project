import axios from "axios";
import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';
import { apiBaseUrl } from "@/environment";


/** Default config for axios instance */
const config = {
  baseURL: apiBaseUrl,
  adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(axios.defaults.adapter)),
  timeout: 20000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, PUT, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Access-Control-Allow-Origin,Content-Type"
  }
};

/** Creating the instance for axios */
export const httpClient = axios.create(config);

/** Auth token interceptors */
const authInterceptor = config => {
  return config;
};

/** logger interceptors */
const loggerInterceptor = config => {
  /** TODO */
  return config;
};

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("API Error, " + error);
    return Promise.reject(error);
  }
);