import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MyList from "../../(root)/my-list/page";

test("Renders navbar in MyList component", () => {
  render(<MyList />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("Renders movie cards in MyList component", async () => {
  render(<MyList />);
  await waitFor(() => {
    const movieCardElements = screen.getAllByTestId("movie-card");
    expect(movieCardElements.length).toBeGreaterThan(0);
  });
});

test("Renders Navbar and movie list when fetchMyList and fetchMovieDetails succeed", async () => {
  jest.spyOn(global, "fetchMyList").mockResolvedValue([1, 2, 3]);
  jest
    .spyOn(global, "fetchMovieDetails")
    .mockResolvedValue({ id: 1, title: "Movie 1" });

  render(<MyList />);

  await waitFor(() => {
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();

    const movieCardElements = screen.getAllByTestId("movie-card");
    expect(movieCardElements.length).toBe(1);
  });
});

test("Renders an error message when fetchMyList fails", async () => {
  jest
    .spyOn(global, "fetchMyList")
    .mockRejectedValue(new Error("Failed to fetch movie list"));

  render(<MyList />);

  await waitFor(() => {
    const errorMessageElement = screen.getByText("Failed to fetch movie list");
    expect(errorMessageElement).toBeInTheDocument();
  });
});
s;
