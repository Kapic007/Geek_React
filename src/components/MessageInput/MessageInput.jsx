import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button } from '@material-ui/core';
import "./messageInput.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/messages/actions";


const MessageInput = ({ chatId }) => {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");
  const valueRef = useRef(null);

  useEffect(() => {
    valueRef.current?.focus();
  });

  const addMessage = (e) => {
    e.preventDefault();
    
    if(messageText) {
      const message = {
        id: uuidv4(),
        author: "Admin",
        text: messageText,
      };
      dispatch(sendMessage(chatId, message));
      setMessageText("");
    }
  }

  return (
    <form className="message-input" onSubmit={addMessage}>
        <TextField type="text" inputRef={valueRef}
          multiline={true}
          fullWidth={true}
          autoFocus={true}
          placeholder="Enter your message"
          value={messageText}
          onChange={e => setMessageText(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 30 }}
          type="submit">
            Send
        </Button>
    </form>
  )
}

export default MessageInput;