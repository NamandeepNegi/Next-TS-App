import { axiosClient } from "@/config";
import Cookies from 'js-cookie';

export const initialAuthentication = () => {
  return axiosClient.get(`/user/me`);
};

export const loginuser = (email: string, passowrd: string) => {
  return axiosClient.post(`/auth/login`, {
    username: email,
    password: passowrd,
    expiresInMins: 30,
  });
};

export const getLoggedInUser = () => {
  return axiosClient.get(`/auth/me`);
};

export const refreshSession = (refreshToken: string, expiresInMins: 30) => {
  return axiosClient.post(`/auth/refresh`, {
    refreshToken,
    expiresInMins,
  });
};
