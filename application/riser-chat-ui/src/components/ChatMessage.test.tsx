import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatMessage from "./ChatMessage";

describe("ChatMessage", () => {
  const chatMessageDataTestId = "chat-message";

  it("should display text when provided", () => {
    const expectedMessage = "test user message";
    const { getByText } = render(
      <ChatMessage text={expectedMessage} isUser={true} />
    );

    const chatMessageTextElement = getByText(expectedMessage);
    expect(chatMessageTextElement).toBeInTheDocument();
  });

  it("should display styling for user messages correctly", () => {
    const expectedMessage = "test user message";
    const { getByTestId } = render(
      <ChatMessage text={expectedMessage} isUser={true} />
    );

    const chatMessageElement = getByTestId(chatMessageDataTestId);
    expect(chatMessageElement).toHaveStyle(
      `alignSelf: flex-end;
       backgroundColor: #dcf8c6;`
    );
  });

  it("should display correct styling for non-user messages", () => {
    const expectedMessage = "test user message";
    const { getByTestId } = render(
      <ChatMessage text={expectedMessage} isUser={false} />
    );

    const messageElement = getByTestId("chat-message");
    expect(messageElement).toHaveStyle(`
      alignSelf: flex-start;
      backgroundColor: #fff;
    `);
  });
});
