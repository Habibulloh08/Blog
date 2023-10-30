import React from "react";
import { Button } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
import { Dropdown } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    return navigate("/sign-in");
  };

  const items = [
    {
      label: (
        <div
          className="flex items-center gap-2"
          onClick={() =>
            navigate(`/profile/user/${localStorage.getItem("my_id")}`)
          }
        >
          <UserOutlined className="text-[17px]" />
          <p className="text-[17px]">Profile</p>
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          className="flex items-center gap-2 text-red-500"
          onClick={() => logout()}
        >
          <LogoutOutlined className="text-[17px]" />
          <p className="text-[17px]">Log out</p>
        </div>
      ),
      key: "2",
    },
  ];
  return (
    <nav className="w-full max-w-[1200px] mx-auto px-[10px]">
      <div className="flex items-center justify-between">
        <img
          onClick={() => navigate("/")}
          className="cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        {localStorage.getItem("token") ? (
          <div className="flex items-center justify-center gap-4 p-1">
            <div
              onClick={() => navigate("/create-post")}
              className="border-[2px] rounded-full flex items-center justify-center p-[3px] border-black cursor-pointer"
            >
              <AddIcon className="text-[15px]" />
            </div>
            <div className="h-[30px] w-[2px] bg-black"></div>
            <Dropdown
              arrow
              placement="bottom"
              menu={{ items }}
              trigger={["click"]}
            >
              <SettingsIcon className="set text-[23px] cursor-pointer" />
            </Dropdown>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/sign-in")}
              colorScheme="blue"
              variant="outline"
            >
              Sign in
            </Button>
            <Button onClick={() => navigate("/sign-up")} colorScheme="blue">
              Sign up
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;