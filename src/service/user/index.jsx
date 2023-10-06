import api from "./axios";

const useUserApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  return {
    signIn,
  };
};

export default useUserApi;
