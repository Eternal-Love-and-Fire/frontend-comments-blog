import { useNavigate } from "react-router-dom";
import axiosClient from "../shared/axiosClient";
import { useStateContext } from "../shared/context";
import { useEffect, useState } from "react";

export const Login = () => {
  const { setUser } = useStateContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/"); 
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const login = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    axiosClient
      .post("login", credentials)
      .then((res) => {
        console.log(res.data);
        setUser(res.data.user);
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };
  if (loading) {
    return null;
  }
  return (
    <div className="w-[380px] mx-auto flex">
      <form
        action=""
        onSubmit={login}
        className="w-full mt-32 p-6 flex flex-col gap-2 rounded-xl border-2"
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          className="ml-1 mb-4 p-2 text-xl rounded-3xl font-bold text-black"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="ml-1 mb-4 p-2 text-xl rounded-3xl font-bold text-black"
        />
        <button
          type="submit"
          className="w-fit mx-auto py-2 px-8 border-2 border-gray-400 shadow-md hover:bg-gray-300 duration-300 shadow-white text-black font-bold text-2xl rounded-full bg-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
