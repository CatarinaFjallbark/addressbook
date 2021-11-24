import React from "react";
import { render, screen } from "@testing-library/react";
import Sorry from "./Sorry";

test("renders we have a problem info", () => {
  render(<Sorry />);
  const linkElement = screen.getByText(/We have a problem/i);
  expect(linkElement).toBeInTheDocument();
});
