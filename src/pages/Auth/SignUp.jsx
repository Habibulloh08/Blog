import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const pasRef1 = useRef();
  const pasRef2 = useRef();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  useEffect(() => {
    if (showPass1) {
      pasRef1.current.type = "text";
    } else {
      pasRef1.current.type = "password";
    }
    if (showPass2) {
      pasRef2.current.type = "text";
    } else {
      pasRef2.current.type = "password";
    }
  }, [showPass1, showPass2]);
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="w-full max-w-[440px] shadow-lg p-8 rounded-xl">
          <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
            Sign Un
          </Text>
          <FormControl>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input id="fullname" type="text" />
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input id="username" type="text" />
            <div className="relative">
              <FormLabel htmlFor="password" className="mt-[20px]">
                Password
              </FormLabel>
              <Input ref={pasRef1} id="password" type="password" />
              {showPass1 ? (
                <ViewIcon
                  onClick={() => setShowPass1(!showPass1)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              ) : (
                <ViewOffIcon
                  onClick={() => setShowPass1(!showPass1)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              )}
            </div>
            <div className="relative">
              <FormLabel htmlFor="r-password" className="mt-[20px]">
                Repeat Password
              </FormLabel>
              <Input ref={pasRef2} id="r-password" type="password" />
              {showPass2 ? (
                <ViewIcon
                  onClick={() => setShowPass2(!showPass2)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              ) : (
                <ViewOffIcon
                  onClick={() => setShowPass2(!showPass2)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              )}
            </div>
            <Button colorScheme="blue" className="w-full mt-[20px]">
              Sign Up
            </Button>
          </FormControl>
        </div>
        <Button
          onClick={() => navigate("/sign-in")}
          colorScheme="gray"
          size="sm"
          className="w-full max-w-[450px] mt-[20px]"
        >
          If you already have an account{" "}
          <span className="text-blue-500 ml-1">Login</span>
        </Button>
      </div>
    </>
  );
};

export default SignUp;
