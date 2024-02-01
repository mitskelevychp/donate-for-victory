import { render, screen } from "@testing-library/react";
import Donate from "./Donate";


describe("Donate", () => {
  test("should compotent Donate", () => {
    render(<Donate />);
    const donate = screen.getByTestId("donate-svg-test");
    expect(donate.getAttribute("data-testid")).toBe("donate-svg-test");
  });
});
