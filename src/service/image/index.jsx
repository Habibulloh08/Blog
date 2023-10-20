import api from "../axios";

const useImagesApi = () => {
  const posterImage = async (imageData, header) =>
    api.post(`/image`, imageData, header);

  return { posterImage };
};

export default useImagesApi;
