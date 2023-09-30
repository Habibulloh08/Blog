import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header className=" bg-white px-[50px] sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="w-full mx-auto max-w-[800px]">
        <div className="bg-red-300">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Layout;
