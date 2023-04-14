import {render, screen} from "@testing-library/react";
import {FishCard} from "../components/FishCard";
import "@testing-library/jest-dom";

describe("FishCard", () => {
  it("renders a lock icon", () => {
    render(<FishCard locked={true} />);
    const heading = screen.getByRole("heading", {
      name: /🔒/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
