import { useEffect, useState } from "react";
import Card from "../components/Card";
import usePostApi from "../service/blog";
import { useToast } from "@chakra-ui/react";
import Loader from "../components/Ui/Loader";
import useLoader from "../store/index";
import SubNavbar from "../components/SubNavbar";
import usePostStore from "../store/posts";

const Home = () => {
  const { getAllPosts } = usePostApi();
  const { startLoading, endLoading, isLoading } = useLoader(); // useLoader dan funksiyalarni olish
  const { setPosts, posts } = usePostStore();
  const toast = useToast();

  useEffect(() => {
    if (posts.length === 0) {
      startLoading();
      getAllPosts()
        .then((res) => {
          setPosts(res.data);
          endLoading();
        })
        .catch((err) => {
          toast({
            title: err.response.data.message,
            status: "error",
            position: "top",
          });
          endLoading();
        });
    } else {
      endLoading(true);
    }
    return () => {
      endLoading(true);
    };
  }, []);
  return (
    <div>
      <SubNavbar />
      {isLoading ? (
        <Loader />
      ) : (
        posts?.map((post) => <Card key={post.id} {...post} />)
      )}
    </div>
  );
};

export default Home;
