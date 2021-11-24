import React from "react";
import { render, screen } from "@testing-library/react";
import ContactCard from "./ContactCard";
import { MemoryRouter } from "react-router-dom";

test("renders email in contact card", () => {
  const info = {
    cell: "12345678",
    email: "test.test@test.com",
    name: "Test",
    img: "Testssson",
    id: "abc",
  };
  render(
    <MemoryRouter>
      <ContactCard info={info} />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/test.test@test.com/i);
  expect(linkElement).toBeInTheDocument();
});
