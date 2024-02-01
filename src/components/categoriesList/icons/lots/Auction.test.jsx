import { render, screen } from "@testing-library/react";
import Auction from "./Auction";

describe("should the SVG icon Auction", () => {
  test("shuold render the SVG Auction", () => {
    render(<Auction />);

    const auction = screen.getByTestId("auction-svg-test");
    expect(auction.getAttribute("data-testid")).toBe("auction-svg-test");
  });
});
