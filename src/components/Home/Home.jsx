import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ChatList from '../chatList/ChatList';
import { mockChatList } from '../../common/mock/mockChatList';
import  mockBotMessage  from '../../common/mock/mockBotMessage';
import "./home.css";
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';




export const Home = () => {

  const { chatId } = useParams();
  const [ chatList, setChatList ] = useState({});
  const botMessage = {
    ...mockBotMessage(),
    id: uuidv4(),
  };

  const sendMessage = useCallback( (message) => {
    setChatList({...chatList, [chatId]: {
      ...chatList[chatId],
      messages: [...chatList[chatId].messages, message]}})
  }, [chatList, chatId])

  useEffect(() => {
    setChatList(mockChatList)
  }, []);

  useEffect(() => {
    if(chatId 
        && chatList[chatId]?.messages.length 
        && chatList[chatId].messages[chatList[chatId].messages.length - 1]?.author !== "bot") {
      const botTimer = setTimeout(() => {
        sendMessage(botMessage)
      }, 1500);
      return () => clearTimeout(botTimer);
    }
  }, [chatList]);

  return (
    
    <div className="home">
          <ChatList chats={chatList} />
          {!!chatList && chatList[chatId] &&
          (<div className="main-container">
            <MessageList messages={chatList[chatId].messages} />
            <MessageInput sendMessage={sendMessage} />
          </div>)}
    </div>
  )
}

export default Home;