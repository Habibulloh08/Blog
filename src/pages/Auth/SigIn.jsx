import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoader from "../../store";

const SigIn = () => {
  const toast = useToast();
  const { isLoading, startLoading, endLoading } = useLoader();
  const navigate = useNavigate();
  const pasRef = useRef();
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    if (showPass) {
      pasRef.current.type = "text";
    } else {
      pasRef.current.type = "password";
    }
  }, [showPass]);
  const singInFunc = () => {
    startLoading();
    setTimeout(() => {
      endLoading(true);
    }, 2000);
    toast({
      title: "Hello",
      status: "success",
      position: "top",
      variant: "top-accent",
    });
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="w-full max-w-[440px] shadow-lg p-8 rounded-xl">
          <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
            Sign In
          </Text>
          <FormControl>
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input id="username" type="text" />
            <div className="relative">
              <FormLabel htmlFor="password" className="mt-[20px]">
                Password
              </FormLabel>
              <Input ref={pasRef} id="password" type="password" />
              {showPass ? (
                <ViewIcon
                  onClick={() => setShowPass(!showPass)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              ) : (
                <ViewOffIcon
                  onClick={() => setShowPass(!showPass)}
                  className="z-99 text-[20px] absolute top-[42px] right-[20px] cursor-pointer"
                />
              )}
            </div>
            <Button
              isLoading={isLoading}
              onClick={() => singInFunc()}
              colorScheme="blue"
              className="w-full mt-[20px]"
            >
              Sign In
            </Button>
          </FormControl>
        </div>
        <Button
          onClick={() => navigate("/sign-up")}
          colorScheme="gray"
          size="sm"
          className="w-full max-w-[450px] mt-[20px]"
        >
          If you haven't an account{" "}
          <span className="text-blue-500 ml-1">Register new account</span>
        </Button>
      </div>
    </>
  );
};

export default SigIn;
