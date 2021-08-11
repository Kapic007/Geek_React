import "./messageList.css";
import Message from "../Message/Message";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import mockBotMessage from "../../common/mock/mockBotMessage";
import { useEffect } from "react";
import { sendMessage } from "../../store/messages/actions";

const MessageList = ({ chatId }) => {
  const messages = useSelector((state) => state.messages[chatId]);
  const dispatch = useDispatch();
  const botMessage = {
    ...mockBotMessage(),
    id: uuidv4(),
  };

  useEffect(() => {
    if (messages && messages[messages.length - 1]?.author !== "bot") {
      const botTimer = setTimeout(() => {
        dispatch(sendMessage(chatId, botMessage));
      }, 1500);
      return () => clearTimeout(botTimer);
    }
  }, [messages]);

  return (
    <div className="message-list">
      {messages &&
        messages.map((message) => (
          <Message
            key={message.id}
            author={message.author}
            text={message.text}
          />
        ))}
    </div>
  );
};

export default MessageList;
