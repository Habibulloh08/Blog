import api from "../axios";

const useUserApi = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  const signUp = async (data) => api.post("/user/signup", data);
  const getUserProfile = async (id) => api.get(`/user/${id}`);  return {
    signIn,
    signUp,
    getUserProfile,
  };
};

export default useUserApi;
