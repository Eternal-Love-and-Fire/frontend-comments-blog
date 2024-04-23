import { Link } from "react-router-dom";
import { useStateContext } from "../shared/context";
import { useState } from "react";
import axiosClient from "../shared/axiosClient";

export const Header = () => {
  const [registered, setRegistered] = useState(
    !!localStorage.getItem("ACCESS_TOKEN")
  );
  // const registered = !!localStorage.getItem("ACCESS_TOKEN");

  const { setUser } = useStateContext();
  const logout = () => {
    localStorage.clear();
    setUser(null);
    setRegistered(false);
    
    axiosClient
      .post("logout")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
  };
  return (
    <header className="px-4 md:py-8 flex justify-between items-center">
      <Link to="/">
        <h1 className="border-b-2 border-transparent text-xl font-bold tracking-widest hover:border-white duration-300 active:border-gray-500">
          Comments Blog
        </h1>
      </Link>
      <div className="flex gap-6 items-center">
        {registered ? (
          <>
            <h3>Username</h3>
            <button
              onClick={logout}
              className="px-6 py-1 font-semibold border-2 rounded-full hover:opacity-50 active:border-gray-500 duration-300"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              to={`login`}
              className="px-6 py-1 font-semibold border-2 rounded-full hover:opacity-50 active:border-gray-500 duration-300"
            >
              Log In
            </Link>
            <Link
              to={`registration`}
              className="px-6 py-1 font-semibold border-2 rounded-full hover:opacity-50 active:border-gray-500 duration-300"
            >
              Reg In
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
