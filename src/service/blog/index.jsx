import api from "../axios";

const usePostApi = () => {
  const getAllPosts = async () => api.get("/blog");
  return { getAllPosts };
};

export default usePostApi;
