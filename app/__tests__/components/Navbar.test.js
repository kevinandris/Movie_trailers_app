import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "../../../components/Navbar";

test("Changes background color when scrolled", () => {
  render(<Navbar />);
  fireEvent.scroll(window, { target: { scrollY: 20 } });
  expect(screen.getByTestId("navbar")).toHaveClass("bg-black-1");
});

test("Logs out the user when logout button is clicked", () => {
  render(<Navbar />);
  fireEvent.click(screen.getByAltText("profile"));
  fireEvent.click(screen.getByText("Log Out"));
  // Add assertion to check if logout functionality is triggered
});

test("Redirects to search page with correct query when search button is clicked", () => {
  render(<Navbar />);
  const searchInput = screen.getByPlaceholderText("Search movie...");
  const searchButton = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "action" } });
  fireEvent.click(searchButton);

  expect(router.push).toHaveBeenCalledWith("/search/action");
});

test("Disables search button when search input is empty", () => {
  render(<Navbar />);
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeDisabled();
});
