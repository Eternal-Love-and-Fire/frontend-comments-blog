import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen md:px-32 text-white bg-black">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};
