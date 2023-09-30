import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-white px-[50px] sticky top-0 z-50">
        <nav className="py-[10px] shadow-sm">
          <div className="container flex items-center justify-between">
            {/* <img src={Logo} alt="" width={70} className="cursor-pointer" /> */}
            <button className="bg-blue-500 py-[9px] px-[15px] text-white rounded-lg">
              Sign in
            </button>
          </div>
        </nav>
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
