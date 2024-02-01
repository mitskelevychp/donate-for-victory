import { render, screen } from "@testing-library/react";
import Basket from "./Basket";

describe("Basket", () => {
  test("should render the SVG icon basket", () => {
    render(<Basket />);
    const cartElement = screen.getByTestId("basket-svg-test");
    expect(cartElement.getAttribute("data-testid")).toBe("basket-svg-test");
  });
});
