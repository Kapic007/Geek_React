import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import "./chatList.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addChat, deleteChat } from "../../store/chat/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ChatList = ({chats}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newChatName, setNewChatName] = useState("");
  const valueRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    valueRef.current?.focus();
  });

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewChatName("");
    setOpen(false);
  };

  const handleAddChat = () => {
    dispatch(addChat(newChatName));
    handleClose();
  };

  const delChat = (id) => {
    dispatch(deleteChat(id));
  };

  return (
    <div className={classes.root}>
      <div className="chat-list-title">Chat List</div>
      <Divider />
      <List component="nav" aria-label="chat's">
        {Object.values(chats).map((chat) => {
          return (
            <div key={chat.id} className="chat-list-item">
              <Link to={`/home/${chat.id}`}>
                <ListItem
                  button
                  selected={selectedIndex === chat.id}
                  onClick={(event) => handleListItemClick(event, chat.id)}
                >
                  <ListItemText primary={chat.name.toUpperCase()} />
                </ListItem>
              </Link>
              <Button
                onClick={() => delChat(chat.id)}
                variant="contained"
                size="small"
                color="secondary"
              >
                Del
              </Button>
            </div>
          );
        })}
        <Button onClick={handleOpen} variant="contained" color="primary">
          Add chat
        </Button>
      </List>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TextField
              type="text"
              inputRef={valueRef}
              multiline={true}
              fullWidth={true}
              autoFocus={true}
              placeholder="Enter chat name"
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
            />
            <div className="button-container">
              <Button
                onClick={handleAddChat}
                variant="contained"
                size="small"
                color="primary"
              >
                Add chat
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                size="small"
                color="primary"
              >
                Close
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ChatList;
