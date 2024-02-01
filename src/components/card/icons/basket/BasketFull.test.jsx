import { render, screen } from "@testing-library/react";
import BasketFull from "./BasketFull";

describe("BasketFull", () => {
  test("should render the SVG icon basketFull", () => {
    render(<BasketFull />);
    
    const cartFullElement = screen.getByTestId("basketFull-svg-test");
    expect(cartFullElement.getAttribute("data-testid")).toBe("basketFull-svg-test");
  });
});
