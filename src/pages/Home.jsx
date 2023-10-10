import { useEffect, useState } from "react";
import Card from "../components/Card";
import usePostApi from "../service/blog";

const Home = () => {
  const { getAllPosts } = usePostApi();
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllPosts().then((res) => setData(res.data));
  }, []);

  return <div>{data.length && data?.map((post) => <Card {...post} />)}</div>;
};

export default Home;
