import { render, screen } from "@testing-library/react";
import HeartFull from "./HeartFull";

test("should render the SVG icon heartFull", () => {
  render(<HeartFull />);

  const heartFullElement = screen.getByTestId("heartFull-svg-test");
  expect(heartFullElement.getAttribute("data-testid")).toBe("heartFull-svg-test");
});
