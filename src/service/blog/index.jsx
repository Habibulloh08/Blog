import api from "../axios";

const usePostApi = () => {
  const getAllPosts = async () => api.get("/blog");
  const getPostByID = async (id) => api.get(`/blog/${id}`);
  const deletePost = async (id)=> api.delete(`/blog/${id}`)
  return { getAllPosts, getPostByID,deletePost };
};

export default usePostApi;
