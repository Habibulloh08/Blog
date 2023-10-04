import { ArrowBackIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const pasRef1 = useRef();
  const pasRef2 = useRef();
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [isInvalidUsername, setIsInvalidUsename] = useState(true);

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
  const singUpFunc = (e) => {
    e.preventDefault();
    const [fullname, username, password, rpassword] =
      e.target.querySelectorAll("input");
    setIsInvalidUsename(/^[@_a-zA-Z]+$/.test(username.value));
    if (isInvalidUsername == true) {
      console.log(
        fullname.value,
        username.value,
        password.value,
        rpassword.value
      );
      // startLoading();
      // setTimeout(() => {
      //   endLoading(true);
      // }, 2000);
      // toast({
      //   title: "Hello",
      //   status: "success",
      //   position: "top",
      //   variant: "top-accent",
      // });
    } else {
      setIsInvalidUsename((p) => ({
        ...p,
        username: /^[@_a-zA-Z]+$/.test(username.value),
      }));
    }
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="w-full max-w-[440px] shadow-lg p-8 rounded-xl">
          <div className="relative">
            <ArrowBackIcon
              onClick={() => navigate("/")}
              className="cursor-pointer text-[23px] absolute left-0 top-[50%] -translate-y-[50%]"
            />
            <Text fontSize="2xl" className="font-bold text-center mb-[40px]">
              Sign Up
            </Text>
          </div>
          <form onSubmit={(e) => singUpFunc(e)}>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input id="fullname" type="text" />
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input
              id="username"
              type="text"
              onChange={(e) => {
                setIsInvalidUsename(/^[@_a-zA-Z]+$/.test(e.target.value));
              }}
            />
            {isInvalidUsername == false > 1 && (
              <p className="text-[15px] text-red-500 p-1">Invalid username </p>
            )}
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
            <Button
              type="submit"
              colorScheme="blue"
              className="w-full mt-[20px]"
            >
              Sign Up
            </Button>
          </form>
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
