import { Paper, Typography } from "@mui/material";
import React from "react";

interface ChatMessageProps {
  text: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isUser }) => {
  const messageStyle = {
    margin: "10px",
    padding: "10px",
    maxWidth: "80%",
    alignSelf: isUser ? "flex-end" : "flex-start",
    backgroundColor: isUser ? "#dcf8c6" : "#fff",
    borderRadius: "10px",
  };

  return (
    <Paper elevation={3} style={messageStyle} data-testid="chat-message">
      <Typography variant="body1">{text}</Typography>
    </Paper>
  );
};

export default ChatMessage;
