import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders Form properly", () => {
  render(<Form />);
  const firstName = screen.getByPlaceholderText("First Name");
  expect(firstName).toBeInTheDocument();

  //last name render
  const lastName = screen.getByPlaceholderText("Last Name");
  expect(lastName).toBeInTheDocument();
  //email render
  const email = screen.getByPlaceholderText("Email");
  expect(email).toBeInTheDocument();
  //date render
  const date = screen.getByTestId("date-element");
  expect(date).toBeInTheDocument();
  //button render
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
});

test("expect inputs to be rendered as empty", () => {
  render(<Form />);
  //first name input rendered empty ?
  const firstName = screen.getByPlaceholderText("First Name");
  expect(firstName.value).toBe("");
  //firist name input rendered empty ?
  const lastName = screen.getByPlaceholderText("Last Name");
  expect(lastName.value).toBe("");
  //firist name input rendered empty ?
  const email = screen.getByPlaceholderText("Email");
  expect(email.value).toBe("");
  //firist name input rendered empty ?
  const date = screen.getByTestId("date-element");
  expect(date.value).toBe("");
});

test("error element is not visible at render", () => {
  render(<Form />);

  const error = screen.getByTestId("error");
  expect(error).not.toBeVisible();
});
