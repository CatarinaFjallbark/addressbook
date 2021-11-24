import React from "react";
import { render, screen } from "@testing-library/react";
import Sort from "./Sort";

test("renders the name label", () => {
  render(<Sort up={true} toggle={jest.fn} />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
