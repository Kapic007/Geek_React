import "./messageList.css";
import Message from "../Message/Message";


const MessageList = ({messages}) => {

  return (
          <div className="message-list">
            {messages.map(message => <Message key={message.id} author={message.author} text={message.text} />)}
          </div>
        )
}

export default MessageList;