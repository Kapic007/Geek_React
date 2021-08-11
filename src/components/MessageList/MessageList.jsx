import "./messageList.css";
import Message from "../Message/Message";
import { useSelector } from "react-redux";

const MessageList = ({ chatId }) => {
  const messages = useSelector((state) => state.messages[chatId]);

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
