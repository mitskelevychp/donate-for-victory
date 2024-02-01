import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Location from "./Location";

describe("should the SVG icon Location", () => {
  test("should render the SVG icon Location", () => {
    render(<Location />);

    const location = screen.getByTestId("location-svg-test");
    expect(location.getAttribute("data-testid")).toBe("location-svg-test");
  });
});
