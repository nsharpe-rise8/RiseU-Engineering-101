import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/ChatInterface", () => () => (
  <div data-testid="chat-interface">Chat Interface Mock</div>
));

describe("App Component", () => {
  test("renders App component without crashing", () => {
    render(<App />);
  });

  test("contains AppBar, and ChatInterface", () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByText("RiseAssist")).toBeInTheDocument();

    expect(getByTestId("chat-interface")).toBeInTheDocument();
  });
});
