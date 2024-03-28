import { render, fireEvent, waitFor } from "@testing-library/react";
import ChatInterface from "../components/ChatInterface";
import { ChatService } from "../services/ChatService";

describe("ChatInterface - Integration", () => {
  const mockServerUrl = "http://test-url.com";
  const chatService = new ChatService(mockServerUrl);
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    globalThis.fetch = jest.fn();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  it("allows the user to type a message", () => {
    const { getByLabelText } = render(
      <ChatInterface chatService={chatService} />
    );
    const input = getByLabelText(/enter your message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Hello, test!" } });
    expect(input.value).toBe("Hello, test!");
  });

  it("sends a message when the send button is clicked", async () => {
    const expectedResponse = "Test response";
    const messagePayload = "Hello, world!";
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ response: expectedResponse }),
    } as Response);

    const { getByText, getByLabelText, findByText } = render(
      <ChatInterface chatService={chatService} />
    );
    const input = getByLabelText(/enter your message/i);
    fireEvent.change(input, { target: { value: messagePayload } });
    fireEvent.click(getByText(/send/i));

    const assistantReply = await findByText(`Assistant: ${expectedResponse}`);
    expect(assistantReply).toBeInTheDocument();
  });

  it("pressing enter sends the message", async () => {
    const expectedResponse = "Test response";
    const messagePayload = "Hello, world!";
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ response: expectedResponse }),
    } as Response);

    const { getByLabelText, findByText } = render(
      <ChatInterface chatService={chatService} />
    );
    const input = getByLabelText(/enter your message/i);
    fireEvent.change(input, { target: { value: messagePayload } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    const assistantReply = await findByText(`Assistant: ${expectedResponse}`);

    expect(assistantReply).toBeInTheDocument();
  });

  it("should clear the input field after a successful message send", async () => {
    const expectedResponse = "Test response";
    const messagePayload = "Hello, world!";
    jest.spyOn(globalThis, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ response: expectedResponse }),
    } as Response);

    const { getByText, getByLabelText } = render(
      <ChatInterface chatService={chatService} />
    );
    const input = getByLabelText(/enter your message/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: messagePayload } });
    fireEvent.click(getByText(/send/i));

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });
});
