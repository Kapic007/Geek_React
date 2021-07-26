import "./message.css"

const Message = ({ author, text }) => {
  const isBotMessage = author === "bot" ? " bot-message" : "";

  return (
    <div className={`message${isBotMessage}`}>
      <div className={`message-author${isBotMessage}`}>{author}</div>
      <div className="message-text">{text}</div>
    </div>
  )
}

export default Message;