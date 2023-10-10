import { ViewIcon, ViewOffIcon, ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLoader from "../../store";
import useUserApi from "../../service/user";

const SigIn = () => {
  const toast = useToast();
  const { isLoading, startLoading, endLoading } = useLoader();
  const navigate = useNavigate();
  const pasRef = useRef();
  const [showPass, setShowPass] = useState(false);
  const [isInvalidUsername, setIsInvalidUsename] = useState(true);

  const { signIn } = useUserApi();

  useEffect(() => {
    if (showPass) {
      pasRef.current.type = "text";
    } else {
      pasRef.current.type = "password";
    }
  }, [showPass]);
  const singInFunc = (e) => {
    e.preventDefault();
    const [username, password] = e.target.querySelectorAll("input");
    setIsInvalidUsename(/^[@_a-zA-Z]+$/.test(username.value));

    if (isInvalidUsername == true) {
      setIsInvalidUsename(true);
      startLoading();
      const body = {
        username: username.value,
        password: password.value,
      };
      signIn({ ...body })
        .then((res) => {
          setIsInvalidUsename(true);
          endLoading();
          console.log(res.data);
          if (res.data) {
            toast({
              title: "Your're successfully logged in",
              status: "success",
              position: "top",
            });
            localStorage.setItem("token", res.data?.token);
            localStorage.setItem("my_id", res.data?.user?.id);
            localStorage.setItem("username", res.data?.user?.username);
            return navigate("/");
          }
        })
        .catch((err) => {
          endLoading();
          setIsInvalidUsename(true);
          toast({
            title: err.response.data.message,
            status: "error",
            position: "top",
          });
        });
    } else {
      setIsInvalidUsename(/^[@_a-zA-Z]+$/.test(username.value));
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
              Sign In
            </Text>
          </div>
          <form onSubmit={(e) => singInFunc(e)}>
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input
              onChange={(e) => {
                setIsInvalidUsename(/^[@_a-zA-Z]+$/.test(e.target.value));
              }}
              isInvalid={!isInvalidUsername}
              required
              id="username"
              type="text"
            />
            {isInvalidUsername == false > 1 && (
              <p className="text-[15px] text-red-500 p-1">Invalid username </p>
            )}
            <div className="relative">
              <FormLabel htmlFor="password" className="mt-[20px]">
                Password
              </FormLabel>
              <Input required ref={pasRef} id="password" type="password" />
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
              type="submit"
              isLoading={isLoading}
              colorScheme="blue"
              className="w-full mt-[20px]"
            >
              Sign In
            </Button>
          </form>
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
