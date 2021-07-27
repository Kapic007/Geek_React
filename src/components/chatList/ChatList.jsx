import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./chatList.css"

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
        {chats.map(chat => {
          return (<ListItem
                    key={chat.id}
                    button
                    selected={selectedIndex === chat.id}
                    onClick={(event) => handleListItemClick(event, chat.id)}
                  >
                    <ListItemText primary={chat.name} />
                  </ListItem>)
          
        })}
      </List>
    </div>
  );
}

export default ChatList;