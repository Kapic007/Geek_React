import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./messageInput.css";

const MessageInput = ({ sendMessage }) => {
  const [messageText, setMessageText] = useState("");

  const addMessage = (e) => {
    e.preventDefault();
    
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
    <form className="message-input" onSubmit={addMessage}>
        <input type="text"
          className="message-input-text"
          placeholder="Enter your message"
          value={messageText}
          onChange={e => setMessageText(e.target.value)} />
        <button className="message-input-button" type="submit">Send</button>
    </form>
  )
}

export default MessageInput;