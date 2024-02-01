import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Call from "./Call";

describe("should the SVG icon Call", () => {
  test("should render the SVG icon Call", () => {
    render(<Call />);

    const call = screen.getByTestId("call-svg-test");
    expect(call.getAttribute("data-testid")).toBe("call-svg-test");
  });
});
