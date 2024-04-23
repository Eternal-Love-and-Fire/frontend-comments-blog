import { useEffect, useState } from "react";
import { Header } from "../widgets";
import axiosClient from "../shared/axiosClient";
import { useParams } from "react-router-dom";

export const EditComment = () => {
  const [comment, setComment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axiosClient.get(`comments/${id}`).then((res) => {
      console.log(res.data);
      setComment(res.data.comment);
    });
  }, [id]);
  const editComment = (event) => {
    event.preventDefault();
    const body = { body: event.target.body.value };
    axiosClient
      .put(`comments/${id}`, body)
      .then((res) => {
        console.log(res.data);
        setComment(res.data.comment);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-w-screen min-h-screen md:px-32 text-white bg-black">
      <Header />
      <main className="p-4 flex flex-col gap-6">
        {comment ? (
          <form action="" onSubmit={editComment}>
            <input
              type="text"
              name="body"
              placeholder={`${comment.body}`}
              className="text-black"
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          "Wait for response"
        )}
      </main>
    </div>
  );
};
