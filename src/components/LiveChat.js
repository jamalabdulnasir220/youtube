import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { createRandomString, generate } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessages({
          name: generate(),
          message: createRandomString(10) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full border border-black h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form className="w-full border border-black p-2 ml-2 flex" onSubmit={e => {
        e.preventDefault()
        dispatch(addMessages({
          name: 'Jamal',
          message: liveMessage
        }))
        setLiveMessage("")
      }}>
        <input
          className="w-full px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
