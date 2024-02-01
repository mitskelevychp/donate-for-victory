import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("should the SVG icon Info", () => {
  test("should render the SVG icon Info", () => {
    render(<Info />);

    const info = screen.getByTestId("info-svg-test");
    expect(info.getAttribute("data-testid")).toBe("info-svg-test");
  });
});
