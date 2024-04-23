/* eslint-disable react/prop-types */
// import { RxAvatar } from "react-icons/rx";

import { MdComment, MdDelete, MdEdit, MdOpenInNew } from "react-icons/md";
// import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Link } from "react-router-dom";

export const CommentItem = ({ comment, deleteComment }) => {
  const userid = 1;

  return (
    <>
      <article className="pb-2 border-b">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* <div className="w-12 h-12">
            <Link
              to={`/users/${userid}`}
              className="hover:opacity-50 duration-300 active:text-gray-500"
            >
              <RxAvatar className="w-full h-full" />
            </Link>
          </div>
          <h3 className="font-bold tracking-wide capitalize">username</h3>
          <time className="opacity-70">22.04.2024 в 22:30</time> */}
            <div className="flex gap-2 text-xl">
              <Link to={`/edit/${comment.id}`}>
                <MdEdit className="hover:opacity-50 duration-300" />
              </Link>
              <button onClick={() => deleteComment(comment.id)}>
                <MdDelete className="hover:opacity-50 duration-300" />
              </button>
              <Link to={`/comment/${userid}`}>
                <MdOpenInNew className="hover:opacity-50 duration-300" />
              </Link>
              <Link to={`/comment/commentssection/${userid}`}>
                <MdComment className="hover:opacity-50 duration-300" />
              </Link>
            </div>
          </div>
          {/* <div className="flex">
          <button>
            <GoArrowUp />
          </button>
          <div className="mx-2 px-2 border rounded-xl">{commentlikes}</div>
          <button>
            <GoArrowDown />
          </button>
        </div> */}
        </div>
        <div>
          <Link to={`/comments/${comment.id}`}>{comment.body}</Link>
        </div>
      </article>
    </>
  );
};
