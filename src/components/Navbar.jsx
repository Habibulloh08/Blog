import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="py-[10px] shadow-sm">
      <div className="container flex items-center justify-between">
        <img src={Logo} alt="" width={70} className="cursor-pointer" />
        {/* <button className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg">
          Sign in
        </button> */}
        <Button
          colorScheme="gray"
          variant="outline"
          size="sm"
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
