import { Button } from "@chakra-ui/react";
// import ErrImage from "../assets/404.gif";
import ErrImage from "../assets/404.gif"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col h-screen w-full">
      <div>
        <img src={ErrImage} alt="error page image" />
      </div>
      <div>
        <h1 className="text-[22px] text-gray-700 mb-4">
          404 - Page not found, please go back
        </h1>
      </div>
      <Button onClick={() => navigate("/")} colorScheme="blue">
        Go back
      </Button>
    </div>
  );
};

export default ErrorPage;