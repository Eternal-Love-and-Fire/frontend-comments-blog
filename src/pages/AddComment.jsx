import { useNavigate } from "react-router-dom";
import axiosClient from "../shared/axiosClient";

export const AddComment = () => {
  const navigate = useNavigate();

  const addComment = (event) => {
    event.preventDefault();

    const credentials = {
      body: event.target.body.value,
      user_id: event.target.user_id.value,
    };

    axiosClient
      .post("comments", credentials)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <form onSubmit={addComment} className="flex flex-col gap-4 text-black">
      <input type="text" name="body" />
      <input type="number" name="user_id" />
      <button type="submit" className="text-white">
        Submit
      </button>
    </form>
  );
};
