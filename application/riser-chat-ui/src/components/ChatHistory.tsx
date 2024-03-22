import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface ChatHistoryProps {
  chatHistory: string[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  // Define the ref with the correct type
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Now TypeScript knows bottomRef.current is an HTMLDivElement
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <Box
      sx={{
        overflowY: "auto",
        maxHeight: "800px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      {chatHistory.map((message, index) => (
        <ChatMessage key={index} text={message} isUser={index % 2 === 0} />
      ))}
      {/* Attach the ref to the div */}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatHistory;
