import { Code } from "@chakra-ui/react";
import { Avatar, Card, Skeleton, Tabs, message } from "antd";
import { Link, Navigate, useParams } from "react-router-dom";
import useUserApi from "../service/user";
import { useEffect, useState } from "react";
import useLoader from "../store";
import SkeletonUI from "../components/Ui/Skleton";
import Meta from "antd/es/card/Meta";

const Profile = () => {
  const { id } = useParams();
  const { getUserProfile } = useUserApi();
  const [userData, setUserData] = useState({});
  const { isLoading, startLoading, endLoading } = useLoader();

  useEffect(() => {
    startLoading();
    getUserProfile(id)
      .then((res) => {
        setUserData(res.data);
        endLoading(true);
      })
      .catch((err) => {
        message.error(err);
        endLoading(true);
      });
  }, [id]);

  const items = [
    {
      key: "1",
      label: "Posts",
      children: (
        <div>
          {userData?.blog?.map((post) => (
            <Card
              style={{
                width: "100%",
                marginTop: 16,
              }}
            >
              <Meta
                avatar={
                  <Avatar
                    src={`https://nest-blog.up.railway.app/api/image/${post?.title?.slice(
                      0,
                      post.title.indexOf("^*^")
                    )}`}
                  />
                }
                title={
                  post?.title.includes("^*^") ? (
                    <Link to={`/details/${post.id}`} className="cursor-pointer">
                      {post.title.slice(
                        post.title.indexOf("^*^") + 3,
                        post.title.length
                      )}
                    </Link>
                  ) : (
                    <Link to={`/details/${post.id}`} className="cursor-pointer">
                      {post?.title}
                    </Link>
                  )
                }
                description={
                  <div className="flex items-center gap-5">
                    <Code>👀 {post?.views}</Code>
                    <Code>{new Date(post?.createdAt).toDateString()}</Code>
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Followers",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Followings",
      children: "Content of Tab Pane 3",
    },
  ];
  if (!localStorage.getItem("token")) {
    return <Navigate to="/sign-in" />;
  }
  return (
    <>
      {isLoading ? (
        <SkeletonUI />
      ) : (
        <div>
          <div className="mb-5 marker:w-full h-[180px] bg-slate-400 rounded-lg"></div>

          <div className="flex items-center gap-5 mb-[50px]">
            <div className="w-[150px] h-[150px] bg-slate-400 rounded-full"></div>
            <div>
              <h1 className="text-[33px] font-bold">{userData?.full_name}</h1>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-[18px]">
                  {userData?.username}
                </p>{" "}
                • <p>{userData?.followers?.length} followers</p> •{" "}
                <p>{userData?.followings?.length} followings</p>
              </div>

              <div className="mt-4">
                <strong>User ID:</strong> <Code>{userData?.id}</Code>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;