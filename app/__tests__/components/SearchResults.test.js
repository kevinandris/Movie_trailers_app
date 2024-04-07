import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchResults from "../../../components/SearchResults";

test("renders search results with movies found", async () => {
  const movies = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(movies),
  });

  render(<SearchResults query="test" />);

  await waitFor(() => {
    expect(screen.getByText('Results for "test"')).toBeInTheDocument();
    expect(screen.getAllByTestId("movie-card")).toHaveLength(3);
  });
});

test("renders search results with no movies found", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });

  render(<SearchResults query="test" />);

  await waitFor(() => {
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});

test("renders search results with a single movie found", async () => {
  const movies = [{ id: 1, title: "Movie 1" }];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(movies),
  });

  render(<SearchResults query="test" />);

  await waitFor(() => {
    expect(screen.getByText('Results for "test"')).toBeInTheDocument();
    expect(screen.getAllByTestId("movie-card")).toHaveLength(1);
  });
});

test("renders search results with a query containing special characters", async () => {
  const movies = [{ id: 1, title: "Movie 1" }];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(movies),
  });

  render(<SearchResults query="!@#$%^&*" />);

  await waitFor(() => {
    expect(screen.getByText('Results for "!@#$%^&*"')).toBeInTheDocument();
    expect(screen.getAllByTestId("movie-card")).toHaveLength(1);
  });
});
