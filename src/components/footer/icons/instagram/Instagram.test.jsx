import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Instagram from "./Instagram";

describe("should the SVG icon Instagram", () => {
  test("should render the SVG icon Instagram", () => {
    render(<Instagram />);

    const instagram = screen.getByTestId("instagram-svg-test");
    expect(instagram.getAttribute("data-testid")).toBe("instagram-svg-test");
  });
});
