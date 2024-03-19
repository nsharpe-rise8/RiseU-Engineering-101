import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  test("renders without crashing", () => {
    render(<AppHeader />);
    expect(screen.getByText("RiseAssist")).toBeInTheDocument();
  });

  test("displays the title correctly", () => {
    render(<AppHeader />);
    expect(
      screen.getByRole("heading", { name: "RiseAssist" })
    ).toBeInTheDocument();
  });

  test("has correct style", () => {
    render(<AppHeader />);
    const heading = screen.getByRole("heading", { name: "RiseAssist" });
    expect(heading).toHaveStyle("justifyContent: center");
    expect(heading).toHaveStyle("marginBottom: 2");
  });
});
