import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import CreatePost from "../pages/post/CreatePost";
import SigIn from "../pages/Auth/SigIn";
import SignUp from "../pages/Auth/SignUp";
import EditPost from "../pages/post/EditPost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "details",
                element: <Details />
              },
              {
                path: "create-post",
                element: <CreatePost />
              },
              {
                path: "edit-post",
                element: <EditPost />
              },
        ],
    },
    {
        path: "/sign-in",
        element: <SigIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
])

export default router;