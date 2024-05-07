// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import CategoryList from "../../../components/CategoryList";

// test("renders correct title", () => {
//   const title = "Action Movies";
//   render(<CategoryList title={title} movies={[]} />);
//   const titleElement = screen.getByText(title);
//   expect(titleElement).toBeInTheDocument();
// });

// test("renders correct number of movies", () => {
//   const movies = [
//     { id: 1, title: "Movie 1" },
//     { id: 2, title: "Movie 2" },
//     { id: 3, title: "Movie 3" },
//   ];
//   render(<CategoryList title="Action Movies" movies={movies} />);
//   const movieElements = screen.getAllByTestId("movie-card");
//   expect(movieElements.length).toBe(movies.length);
// });

// test("renders without error when title is empty", () => {
//   const movies = [
//     { id: 1, title: "Movie 1" },
//     { id: 2, title: "Movie 2" },
//     { id: 3, title: "Movie 3" },
//   ];
//   render(<CategoryList title="" movies={movies} />);
//   const movieElements = screen.getAllByTestId("movie-card");
//   expect(movieElements.length).toBe(movies.length);
// });
