import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Message from "./Message";

describe("should the SVG icon Message", () => {
  test("should render the SVG icon Message", () => {
    render(<Message />);

    const message = screen.getByTestId("message-svg-test");
    expect(message.getAttribute("data-testid")).toBe("message-svg-test");
  });
});
