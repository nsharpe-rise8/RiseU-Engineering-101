import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function TextInput() {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setResponse("Please ask me something.");
      return;
    }
    const aiResponse = await simulateApiResponse(inputValue);
    setResponse(aiResponse);
  };

  const simulateApiResponse = async (question): Promise<string> => {
    setIsLoading(true);
    // Simulate an API call with a delay
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`You asked: ${question}`);
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <Box display='flex' alignItems='center' flexDirection='column'>
      <TextField
        fullWidth
        label="Ask me anything"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "20px" }}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
      <Typography variant="body1" style={{ marginTop: "20px" }}>
        {response}
      </Typography>
    </Box>
  );
}
