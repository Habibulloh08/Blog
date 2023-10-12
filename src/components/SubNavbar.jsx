import { useEffect, useState } from "react";
import usePostApi from "../service/blog";
import usePostStore from "../store/posts";

const SubNavbar = () => {
  const { getAllPosts } = usePostApi();
  const { setPosts, posts } = usePostStore();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => setData(res.data));
  }, []);
  let updatedList = [...posts];

  const searchPostsFunc = (val) => {
    updatedList = data.filter((post) => {
      return (
        post.title.toLowerCase().includes(val.toLowerCase()) ||
        post.user.username.toLowerCase().includes(val.toLowerCase()) ||
        post.body.toLowerCase().includes(val.toLowerCase())
      );
    });
    setPosts(updatedList);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Serch for title ..."
        className="border rounded-lg py-2 px-3 w-full"
        onChange={(e) => searchPostsFunc(e.target.value)}
      />
    </div>
  );
};

export default SubNavbar;
