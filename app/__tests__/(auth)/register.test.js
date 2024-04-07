import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../../(auth)/register/page";

test("renders AuthForm within Register", () => {
  render(<Register />);
  expect(screen.getByTestId("auth-form")).toBeInTheDocument();
});

test("renders a div element within Register", () => {
  render(<Register />);
  expect(screen.getByRole("div")).toBeInTheDocument();
});

test("should render the Register page with the correct props", () => {
  render(<Register />);
  expect(screen.getByTestId("auth-form")).toBeInTheDocument();
});

test("should pass the register type prop to AuthForm component", () => {
  render(<Register />);
  expect(screen.getByTestId("auth-form")).toHaveAttribute("type", "register");
});
