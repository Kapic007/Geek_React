import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Profile } from "../Profile/Profile";
import { v4 as uuidv4 } from 'uuid';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ChatList from '../chatList/ChatList';
import { mockChatList } from '../../common/mock/mockChatList';
import  mockBotMessage  from '../../common/mock/mockBotMessage';
import "./home.css"


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [chatList, setChatList] = useState([]);
  const [ messageList, setMessageList ] = useState([]);
  const botMessage = {
    ...mockBotMessage(),
    id: uuidv4(),
  };

  const sendMessage = (message) => {
    setMessageList([...messageList, message]);
  }

  useEffect(() => {
    setChatList([...mockChatList])
  }, []);

  useEffect(() => {
    if(messageList.length && messageList[messageList.length - 1]?.author !== "bot") {
      const botTimer = setTimeout(() => {
        setMessageList([...messageList, botMessage])
      }, 1500);
      return () => clearTimeout(botTimer);
    }
  }, [messageList]);

  return (
    <div className="home">
      <Link to="/chat"><Button variant="contained" size="large" color="primary" className={classes.margin}>
        Chat
      </Button></Link>
      <Link to="/profile"><Button variant="contained" size="large" color="primary" className={classes.margin}>
        Profile
      </Button></Link>
      <Switch>
        <Route path="/chat" exact>
          <ChatList chats={chatList}/>
          <div className="main-container">
            <MessageList messages={messageList} />
            <MessageInput sendMessage={sendMessage} />
          </div>
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </div>
  )
}

export default Home;