import { render, screen } from "@testing-library/react";
import Message from "./Message";

describe("should the SVG icon Message in productView", () => {
  test("should render the SVG icon Message in productView", () => {
    render(<Message />);

    const message = screen.getByTestId("message-svg-test-productView");
    expect(message.getAttribute("data-testid")).toBe("message-svg-test-productView");
  });
});
