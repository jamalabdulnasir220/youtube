import React from "react";
import { FaRegUser } from "react-icons/fa";

const commentData = [
  {
    name: "Jamal",
    text: "A comment on what i am doing currently",
    replies: [],
  },
  {
    name: "Jamal",
    text: "A comment on what i am doing currently",
    replies: [
      {
        name: "nasir",
        text: "A comment on what i am doing currently",
        replies: [],
      },
    ],
  },
  {
    name: "Jamal",
    text: "A comment on what i am doing currently",
    replies: [],
  },
  {
    name: "Jamal",
    text: "A comment on what i am doing currently",
    replies: [],
  },
];

const Comment = ({ data }) => (
  <div className="flex bg-gray-100 shadow-sm items-center p-2 rounded-lg my-2">
    <FaRegUser />
    <div className="px-3">
      <p className="font-bold">{data.name}</p>
      <p>{data.text}</p>
    </div>
  </div>
);

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default Comments;
