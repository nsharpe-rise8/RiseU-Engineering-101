import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  it("renders the header with correct text", () => {
    render(<AppHeader />);
    const headerText = screen.getByText("RiseAssist");
    expect(headerText).toBeInTheDocument();
  });

  it("renders the Typography component with the h4 variant", () => {
    render(<AppHeader />);
    const typographyComponent = screen.getByRole("heading", {
      name: "RiseAssist",
    });
    expect(typographyComponent).toBeInTheDocument();
    expect(typographyComponent).toHaveClass("MuiTypography-h4");
  });
});
