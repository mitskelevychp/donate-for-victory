import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-named-as-default
import Youtube from "./Youtube";

describe("should the SVG icon Youtube", () => {
  test("should render the SVG icon Youtube", () => {
    render(<Youtube />);

    const youtube = screen.getByTestId("youtube-svg-test");
    expect(youtube.getAttribute("data-testid")).toBe("youtube-svg-test");
  });
});
