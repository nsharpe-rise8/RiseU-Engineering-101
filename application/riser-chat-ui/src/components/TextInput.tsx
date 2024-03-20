import { Typography, TextField, Button, Box } from "@mui/material";
import { SetStateAction, useState } from "react";
import PromptList from "./PromptList";

export default function TextInput() {

  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prompts, setPrompts] = useState<string[]>([])

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  // Possible Error: Mutating state directly instead of creating new array
  function handleAddPrompt(value: string) {
    prompts.push(value)
    setPrompts(prompts)
  }

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      setResponse("Please ask me something.");
      return;
    }
    handleAddPrompt(inputValue)
    const aiResponse = await simulateApiResponse(inputValue);
    setResponse(aiResponse);
  };

  const simulateApiResponse = async (question: string): Promise<string> => {
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
      {/* Error Below: 0 is falsey but still valid in JSX, leads to 0 being rendered when list is empty */}
      {prompts.length && <PromptList items={prompts} />}
    </Box>
  );
}
