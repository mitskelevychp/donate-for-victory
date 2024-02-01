import { render, screen } from "@testing-library/react";
import Heart from "./Heart";

test("should render the SVG icon heart", () => {
  render(<Heart />);

  const heartElement = screen.getByTestId("heart-svg-test");
  expect(heartElement.getAttribute("data-testid")).toBe("heart-svg-test");
});
