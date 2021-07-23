import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./messageInput.css";

const MessageInput = ({ sendMessage }) => {
  const [messageText, setMessageText] = useState("");

  const addMessage = () => {
    if(messageText) {
      const message = {
        id: uuidv4(),
        author: "Admin",
        text: messageText,
      };
      sendMessage(message);
      setMessageText("");
    }
  }

  return (
    <div className="message-input" >
        <input type="text"
          className="message-input-text"
          placeholder="Enter your message"
          value={messageText}
          onChange={e => setMessageText(e.target.value)} />
        <button className="message-input-button" onClick={addMessage}
          type="button">Send</button>
    </div>
  )
}

export default MessageInput;