import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Page from "../../(root)/page";

test("renders Navbar component", () => {
  render(<Page />);
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("renders Hero component", () => {
  render(<Page />);
  const heroElement = screen.getByTestId("hero");
  expect(heroElement).toBeInTheDocument();
});

test("Fetching genre movies successfully", async () => {
  const mockGenreMovies = [
    { id: 1, name: "Action", movies: [] },
    { id: 2, name: "Comedy", movies: [] },
    { id: 3, name: "Drama", movies: [] },
  ];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockGenreMovies),
  });

  render(<Page />);

  await waitFor(() => {
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
  });
});

test("Rendering multiple CategoryList components", () => {
  const mockGenreMovies = [
    { id: 1, name: "Action", movies: [] },
    { id: 2, name: "Comedy", movies: [] },
    { id: 3, name: "Drama", movies: [] },
  ];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockGenreMovies),
  });

  render(<Page />);

  expect(screen.getByText("Action")).toBeInTheDocument();
  expect(screen.getByText("Comedy")).toBeInTheDocument();
  expect(screen.getByText("Drama")).toBeInTheDocument();
});
