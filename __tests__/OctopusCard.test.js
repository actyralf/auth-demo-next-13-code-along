import {render, screen} from "@testing-library/react";
import {OctopusCard} from "../components/OctopusCard";
import "@testing-library/jest-dom";

describe("OctopusCard", () => {
  it("renders a lock icon", () => {
    render(<OctopusCard locked={true} />);
    const heading = screen.getByRole("heading", {
      name: /🔒/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
