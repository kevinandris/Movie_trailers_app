import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "../../(root)/search/[query]/page";

test("renders Navbar component", () => {
  render(<Search />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("renders SearchResults component with correct query prop", () => {
  const query = "test";
  render(<Search params={{ query }} />);
  const searchResultsElement = screen.getByTestId("search-results");
  expect(searchResultsElement).toHaveAttribute("query", query);
});

test("renders SearchPage without params", () => {
  render(<SearchPage params={{}} />);
});

test("renders SearchPage with params without query", () => {
  render(<SearchPage params={{ query: "" }} />);
});
