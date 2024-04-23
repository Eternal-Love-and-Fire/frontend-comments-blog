import { useEffect, useState } from "react";
import { CommentItem, Header } from "../widgets";
import axiosClient from "../shared/axiosClient";
import { useParams } from "react-router-dom";

export const Comment = () => {
  const [comment, setComment] = useState(null);
  const [subComments, setSubComments] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axiosClient.get(`comments/${id}`).then((res) => {
      console.log(res.data.comment.sub_comments);
      setComment(res.data.comment);
      setSubComments(res.data.comment.sub_comments);
    });
  }, [id]);

  return (
    <div className="min-w-screen min-h-screen md:px-32 text-white bg-black">
      <Header />
      <main className="p-4 flex flex-col gap-6">
        {comment ? (
          <>
            <CommentItem comment={comment} />
            <article className="ml-4 pb-2 border-b-2 flex flex-col gap-4">
              {subComments.map((item) => {
                return <div key={item.id}>{item.body}</div>;
              })}
            </article>
          </>
        ) : (
          "Wait for response"
        )}
      </main>
    </div>
  );
};
