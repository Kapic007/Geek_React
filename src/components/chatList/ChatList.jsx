import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./chatList.css";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ChatList = ({chats}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    
    <div className={classes.root}>
      <div className="chat-list-title">Chat List</div>
      <Divider />
      <List component="nav" aria-label="chat's">
        {Object.values(chats).map(chat => {
          return (<Link to={`/home/${chat.id}`} key={chat.id}>
                    <ListItem
                      button
                      selected={selectedIndex === chat.id}
                      onClick={(event) => handleListItemClick(event, chat.id)}
                    >
                      <ListItemText primary={chat.name} />
                    </ListItem>
                  </Link>)
        })}
        <Button variant="contained" size="small" color="primary" >Add chat</Button>
      </List>
    </div>
  );
}

export default ChatList;