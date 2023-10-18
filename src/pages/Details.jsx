import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usePostApi from "../service/blog";
import User from "../assets/user.png";
import useLoader from "../store/index";
import { Code, useToast } from "@chakra-ui/react";
import Loader from "../components/Ui/Loader";
import { ViewIcon } from "@chakra-ui/icons";
import parse from "html-react-parser";

const Details = () => {
  const { getPostByID } = usePostApi();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { isLoading, startLoading, endLoading } = useLoader();
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const response = await getPostByID(id);
        endLoading(true);
        setPost(response.data);
      } catch (error) {
        endLoading(true);
        toast({
          title: "Something went wrong",
          error,
          status: "error",
          position: "top",
        });
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <div className="w-[80px] h-[60px] rounded-full">
                <img
                  src={User}
                  alt="user Img"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-semibold tex-[20px]">
                  {post?.user?.full_name}
                </h2>

                {localStorage.getItem("my_id") === post?.user?.id ? (
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-500 tex-[17px]">
                      {post.user?.username}{" "}
                    </h3>{" "}
                    - you
                  </div>
                ) : (
                  <h3 className="font-bold text-gray-500 tex-[17px]">
                    {post.user?.username}
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-5 mt-6 ">
            <Code>{new Date(post?.createdAt).toDateString()}</Code>
            <div className="flex items-center gap-[2px]">
              <ViewIcon className="tex-[20px]" />
              <p>{post?.views}</p>
            </div>
          </div>
          <div className="mt-9">
            <h2 className=" nohover text-[27px] font-bold mb-4">
              {post?.title}
            </h2>
            <div className="det-body">{parse(`${post?.body}`)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
