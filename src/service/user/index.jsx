import { data } from "autoprefixer";
import api from "../axios";

const useUserApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);
  return {
    signIn,
    signUp,
  };
};

export default useUserApi;
