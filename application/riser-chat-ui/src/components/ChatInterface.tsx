// src/components/ChatInterface.tsx
import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import ChatHistory from "./ChatHistory";
import { ChatService } from "../services/ChatService";

const chatService = new ChatService(import.meta.env.VITE_BACKEND_URL);

function ChatInterface() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = async () => {
    setIsLoading(true);
    try {
      const assistantReply = await chatService.sendMessage(userInput);
      setChatHistory([
        ...chatHistory,
        `User: ${userInput}`,
        `Assistant: ${assistantReply}`,
      ]);
      setUserInput("");
    } catch (error) {
      console.error("Error sending message to server:", error);
      // Optionally, handle the error in the UI
    }
    setIsLoading(false);
  };

  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <ChatHistory chatHistory={chatHistory} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          label="Enter your message"
          value={userInput}
          onChange={handleInputChange}
          fullWidth
          sx={{ mr: 1 }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          disabled={isLoading}
        >
          Send
        </Button>
      </Box>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export default ChatInterface;
