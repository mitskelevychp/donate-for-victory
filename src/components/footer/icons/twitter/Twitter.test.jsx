import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Twitter from "./Twitter";

describe("should the SVG icon Twitter", () => {
  test("should render the SVG icon Twitter", () => {
    render(<Twitter />);

    const twitter = screen.getByTestId("twitter-svg-test");
    expect(twitter.getAttribute("data-testid")).toBe("twitter-svg-test");
  });
});
