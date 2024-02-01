import { render, screen } from "@testing-library/react";
import EyeClosed from "./EyeClosed";

describe("should the SVG icon EyeClosed", () => {
  test("should render the SVG icon EyeClosed", () => {
    render(<EyeClosed />);

    const eyeClosed = screen.getByTestId("eyeClosed-svg-test");
    expect(eyeClosed.getAttribute("data-testid")).toBe("eyeClosed-svg-test");
  });
});
