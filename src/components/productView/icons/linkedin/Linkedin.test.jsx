import { render, screen } from "@testing-library/react";
import Linkedin from "./Linkedin";

describe("should the SVG icon Linkedin in productView", () => {
  test("should render the SVG icon Linkedin in productView", () => {
    render(<Linkedin />);

    const linkedin = screen.getByTestId("linkedin-svg-test-productView");
    expect(linkedin.getAttribute("data-testid")).toBe("linkedin-svg-test-productView");
  });
});
