import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MovieCard from "../../../components/MovieCard";

test("Renders movie thumbnail image", () => {
  const movie = {
    backdrop_path: "path/to/backdrop.jpg",
    poster_path: "path/to/poster.jpg",
    title: "Movie Title",
    name: "Movie Name",
  };
  render(<MovieCard movie={movie} />);
  const thumbnailImage = screen.getByAltText("Movie Title");
  expect(thumbnailImage).toBeInTheDocument();
});

test("Renders default image when no backdrop or poster path is provided", () => {
  const movie = {
    title: "Movie Title",
    name: "Movie Name",
  };
  render(<MovieCard movie={movie} />);
  const defaultImage = screen.getByAltText("Movie Title");
  expect(defaultImage).toBeInTheDocument();
});

test("Clicking on the movie thumbnail opens the modal", () => {
  const movie = {
    backdrop_path: "path/to/backdrop.jpg",
    poster_path: "path/to/poster.jpg",
    title: "Movie Title",
    name: "Movie Name",
  };
  render(<MovieCard movie={movie} />);
  const thumbnail = screen.getByAltText("Movie Title");
  fireEvent.click(thumbnail);
  const modal = screen.getByTestId("modal");
  expect(modal).toBeInTheDocument();
});

test("Closing the modal sets the showModal state to false", () => {
  const movie = {
    backdrop_path: "path/to/backdrop.jpg",
    poster_path: "path/to/poster.jpg",
    title: "Movie Title",
    name: "Movie Name",
  };
  render(<MovieCard movie={movie} />);
  const thumbnail = screen.getByAltText("Movie Title");
  fireEvent.click(thumbnail);
  const modal = screen.getByTestId("modal");
  const closeButton = screen.getByTestId("close-button");
  fireEvent.click(closeButton);
  expect(modal).not.toBeInTheDocument();
});
