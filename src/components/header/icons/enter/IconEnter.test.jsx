import { render, screen } from "@testing-library/react";
import IconEnter from "./IconEnter";

describe("should the SVG icon IconEnter", () => {
  test("should render the SVG icon IconEnter", () => {
    render(<IconEnter />);

    const iconEnter = screen.getByTestId("iconEnter-svg-test");
    expect(iconEnter.getAttribute("data-testid")).toBe("iconEnter-svg-test");
  });
});
