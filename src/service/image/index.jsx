import api from "../axios";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "multipart/form-data",
  },
};


const useImagesApi = () => {
  const posterImage = async (imageData) =>
    api.post(`/image`, imageData, config);
  return { posterImage };
};

export default useImagesApi;
