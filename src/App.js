import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MessageList from './components/MessageList/MessageList';
import MessageInput from './components/MessageInput/MessageInput';
import ChatList from './components/chatList/ChatList';
import { mockChatList } from './common/mock/mockChatList';
import  mockBotMessage  from './common/mock/mockBotMessage';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  // const [chatList, setChatList] = useState([]);
  // const [ messageList, setMessageList ] = useState([]);
  // const botMessage = {
  //   ...mockBotMessage(),
  //   id: uuidv4(),
  // };

  // const sendMessage = (message) => {
  //   setMessageList([...messageList, message]);
  // }

  // useEffect(() => {
  //   setChatList([...mockChatList])
  // }, []);

  // useEffect(() => {
  //   if(messageList.length && messageList[messageList.length - 1]?.author !== "bot") {
  //     const botTimer = setTimeout(() => {
  //       setMessageList([...messageList, botMessage])
  //     }, 1500);
  //     return () => clearTimeout(botTimer);
  //   }
  // }, [messageList]);

  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
