import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Facebook from "./Facebook";

describe("should the SVG icon Facebook", () => {
  test("should render the SVG icon Facebook", () => {
    render(<Facebook />);

    const facebook = screen.getByTestId("facebook-svg-test");
    expect(facebook.getAttribute("data-testid")).toBe("facebook-svg-test");
  });
});
