import { render, fireEvent, waitFor } from "@testing-library/react";
import ChatInterface from "../components/ChatInterface";
import { ChatService } from "../services/ChatService";

describe("ChatInterface", () => {
  const mockSendMessage = jest.fn();
  const mockChatService = {
    sendMessage: mockSendMessage,
  } as unknown as ChatService;

  beforeEach(() => {
    mockSendMessage.mockReset();
  });

  it("allows the user to type a message", () => {
    const { getByLabelText } = render(
      <ChatInterface chatService={mockChatService} />
    );
    const input = getByLabelText(/enter your message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello, test!" } });
    expect(input.value).toBe("Hello, test!");
  });

  it("sends a message when the send button is clicked", async () => {
    mockSendMessage.mockResolvedValue("Test reply");
    const { getByText, getByLabelText, findByText } = render(
      <ChatInterface chatService={mockChatService} />
    );
    const input = getByLabelText(/enter your message/i);
    fireEvent.change(input, { target: { value: "Hello, test!" } });
    fireEvent.click(getByText(/send/i));

    const assistantReply = await findByText(/Assistant: Test reply/i);
    expect(assistantReply).toBeInTheDocument();
    expect(mockSendMessage).toHaveBeenCalledWith("Hello, test!");
  });

  it("should not send a message if input is empty", async () => {
    const { getByText } = render(
      <ChatInterface chatService={mockChatService} />
    );
    fireEvent.click(getByText(/send/i));

    await waitFor(() => {
      expect(mockSendMessage).not.toHaveBeenCalled();
    });
  });

  it("pressing enter sends the message", async () => {
    mockSendMessage.mockResolvedValue("Test reply");
    const { getByLabelText, findByText } = render(
      <ChatInterface chatService={mockChatService} />
    );
    const input = getByLabelText(/enter your message/i);
    fireEvent.change(input, { target: { value: "Hello, test!" } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    const assistantReply = await findByText(/Assistant: Test reply/i);

    expect(assistantReply).toBeInTheDocument();
    expect(mockSendMessage).toHaveBeenCalledWith("Hello, test!");
  });

  it("should clear the input field after a successful message send", async () => {
    mockSendMessage.mockResolvedValue("Test reply");
    const { getByText, getByLabelText } = render(
      <ChatInterface chatService={mockChatService} />
    );
    const input = getByLabelText(/enter your message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello, test!" } });
    fireEvent.click(getByText(/send/i));

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });
});
