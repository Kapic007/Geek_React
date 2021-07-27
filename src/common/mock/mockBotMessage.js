const mockBotMessage = () => {
  const mockMessages = [
  "I'm listening. Tell me more...",
  "Hmmm.....",
  "I don't think so.",
  "It's very interesting",
  "You are so clever",
  "continue please",
  "do not be shy, tell",
  "I do not understand you",
  "I think it's not funny",
  "you are so funny",
  "Tell me anecdote please"
  ];

  const randomMessage = (messages) => {
    const random = Math.floor(Math.random() * messages.length)
    return messages[random]
  };

  return {author: "bot", text: randomMessage(mockMessages)};
}

export default mockBotMessage;