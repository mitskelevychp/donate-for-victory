import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default, import/no-unresolved
import Linkedin from "./Linkedin.svg";

describe("should the SVG icon Linkedin", () => {
  test("should render the SVG icon Linkedin", () => {
    render(<Linkedin />);

    const linkedin = screen.getByTestId("linkedin-svg-test");
    expect(linkedin.getAttribute("data-testid")).toBe("linkedin-svg-test");
  });
});
