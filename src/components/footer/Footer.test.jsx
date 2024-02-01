import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("should the Footer", () => {
  test("should render the Footer", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer-svg-test");
    expect(footer.getAttribute("data-testid")).toBe("footer-svg-test");
  });
});
