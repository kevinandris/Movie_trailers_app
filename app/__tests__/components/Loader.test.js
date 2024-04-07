import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Loader from "../../../components/Loader";
test("Renders spinning animation", () => {
  render(<Loader />);
  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});

test("Renders with correct CSS classes", () => {
  render(<Loader />);
  const loader = screen.getByTestId("loader");
  expect(loader).toHaveClass("flex items-center justify-center h-screen");
  const spinner = screen.getByTestId("spinner");
  expect(spinner).toHaveClass(
    "animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"
  );
});

test("Loader is not rendered when loader prop is false", () => {
  render(<Loader loader={false} />);
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();
});

test("Loader is rendered when loader prop is true", () => {
  render(<Loader loader={true} />);
  const loader = screen.getByTestId("loader");
  expect(loader).toBeInTheDocument();
});
