import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Button } from "@chakra-ui/react";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full max-w-[1200px] m-auto px-[10px]">
      <div className=" flex items-center justify-between">
        <img src={Logo} alt="" width={70} className="cursor-pointer" />
        {localStorage.getItem("token") ? (
          <div className="flex items-center justify-center gap-4">
            <div className="border-[2px] rounded-full flex items-start justify-center p-[5px] border-black cursor-pointer ">
              <AddIcon
                className="text-[16px] "
                onClick={() => navigate("/create-post")}
              />
            </div>
            <div className="h-[30px] w-[3px] bg-black "></div>
            <SettingsIcon className="set text-[24px] cursor-pointer" />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              colorScheme="blue"
              variant="outline"
              size="sm"
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </Button>
            <Button
              colorScheme="blue"
              size="sm"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
