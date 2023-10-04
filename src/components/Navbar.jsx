import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full max-w-[1200px] m-auto px-[10px]">
      <div className=" flex items-center justify-between">
        <img src={Logo} alt="" width={70} className="cursor-pointer" />
        {/* <button className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg">
          Sign in
        </button> */}
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
      </div>
    </nav>
  );
};

export default Navbar;
