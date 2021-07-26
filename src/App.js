import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import MessageList from './components/MessageList/MessageList';
import MessageInput from './components/MessageInput/MessageInput';


function App() {
  const [ messageList, setMessageList ] = useState([]);
  const botMessage = {
    id: uuidv4(),
    author: "bot",
    text: "I'm listening. Tell me more..."
  }

  const sendMessage = (message) => {
    setMessageList([...messageList, message]);
  }

  useEffect(() => {
    if(messageList.length && messageList[messageList.length - 1]?.author !== "bot") {
      const botTimer = setTimeout(() => {
        setMessageList([...messageList, botMessage])
      }, 1500);
      return () => clearTimeout(botTimer);
    }
  }, [messageList]);

  return (
    <div className="App">
      <MessageList messages={messageList} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default App;
