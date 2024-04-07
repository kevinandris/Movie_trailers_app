import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AuthForm from "../../../components/AuthForm";


test("renders correct input fields based on type prop", () => {
  render(<AuthForm type="register" />);
  expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});

test("renders correct input fields based on type prop", () => {
  render(<AuthForm type="login" />);
  expect(screen.queryByPlaceholderText("Username")).not.toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});

test("displays error message when form validation fails", async () => {
  render(<AuthForm type="register" />);
  fireEvent.click(screen.getByText("Join now"));
  await waitFor(() => {
    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
});

test("displays error message when form validation fails", async () => {
  render(<AuthForm type="login" />);
  fireEvent.click(screen.getByText("Login Now"));
  await waitFor(() => {
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
});

test("redirects to login page after successful registration", async () => {
  render(<AuthForm type="register" />);
  const usernameInput = screen.getByPlaceholderText("Username");
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Join now");

  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(mockRouter.push).toHaveBeenCalledWith("/login");
  });
});

test("displays error message for invalid registration form", async () => {
  render(<AuthForm type="register" />);
  const submitButton = screen.getByText("Join now");

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Username is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });
});
