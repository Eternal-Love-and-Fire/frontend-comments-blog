import { useEffect, useState } from "react";
// import { useStateContext } from "../shared/context";
import { CommentItem, Header } from "../widgets/index";
import axiosClient from "../shared/axiosClient";
import { Link } from "react-router-dom";

export const Home = () => {
  const [comments, setComments] = useState(null);
  // const { user } = useStateContext();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = (slug = "comments") => {
    axiosClient
      .get(slug)
      .then((res) => setComments(res.data.comments))
      .catch((err) => console.log(err.message));
  };

  const deleteComment = (id) => {
    axiosClient.delete(`comments/${id}`).then((res) => {
      console.log(res.data);
      setComments(comments.filter((comment) => comment.id !== id));
    });
  };

  return (
    <>
      <Header />
      <main className="p-4 flex flex-col gap-6">
        <Link
          to={`addComment`}
          className="border-2 w-fit mx-auto px-8 py-2 rounded-full hover:opacity-60 duration-300"
        >
          Add Comment
        </Link>
        {comments
          ? comments.map((item, index) => {
              return (
                <CommentItem
                  key={index}
                  comment={item}
                  deleteComment={deleteComment}
                />
              );
            })
          : "Wait a little bit"}
      </main>
    </>
  );
};
