import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <header className="mb-10 py-[15px] shadow">
        <Navbar />
      </header>
      <main className="w-full mx-auto max-w-[800px]">
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default Layout;
