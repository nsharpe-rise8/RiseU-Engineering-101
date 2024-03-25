// App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock Sidebar and AppHeader to isolate the test
jest.mock("./components/Sidebar", () => () => (
  <div data-testid="sidebar">Sidebar Mock</div>
));
jest.mock("./components/AppHeader", () => () => (
  <div data-testid="appheader">AppHeader Mock</div>
));

describe("App", () => {
  it("renders the Sidebar and AppHeader components", () => {
    render(<App />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("appheader")).toBeInTheDocument();
  });
});
