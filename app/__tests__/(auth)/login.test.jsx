import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../../(auth)/login/page";

test("renders AuthForm component", () => {
  render(<Page />);
  expect(screen.getByTestId("auth-form")).toBeInTheDocument();
});

// test("renders a div element", () => {
//   render(<Page />);
//   expect(screen.getByRole("div")).toBeInTheDocument();
// });

// test("renders AuthForm component and a div element", () => {
//   render(<Page />);
//   expect(screen.getByTestId("auth-form")).toBeInTheDocument();
//   expect(screen.getByRole("div")).toBeInTheDocument();
// });

// test("AuthForm component not rendered without type prop", () => {
//   render(<Page />);
//   expect(screen.queryByTestId("auth-form")).not.toBeInTheDocument();
// });
