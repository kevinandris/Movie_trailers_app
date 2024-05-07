// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import HeroCard from "../../../components/HeroCard";

// test("Displays correct movie title", () => {
//   const movie = {
//     title: "Test Movie",
//     name: "Test Movie",
//     overview: "This is a test movie",
//     backdrop_path: "test.jpg",
//     poster_path: "test.jpg",
//   };
//   render(<HeroCard trendingMovie={movie} />);
//   const titleElement = screen.getByText(/Test Movie/i);
//   expect(titleElement).toBeInTheDocument();
// });

// test("Displays correct movie overview", () => {
//   const movie = {
//     title: "Test Movie",
//     name: "Test Movie",
//     overview: "This is a test movie",
//     backdrop_path: "test.jpg",
//     poster_path: "test.jpg",
//   };
//   render(<HeroCard trendingMovie={movie} />);
//   const overviewElement = screen.getByText(/This is a test movie/i);
//   expect(overviewElement).toBeInTheDocument();
// });

// test("Clicking on the Play Now button opens the modal", () => {
//   const movie = {
//     title: "Test Movie",
//     name: "Test Movie",
//     overview: "This is a test movie",
//     backdrop_path: "test.jpg",
//     poster_path: "test.jpg",
//   };
//   render(<HeroCard trendingMovie={movie} />);
//   const playNowButton = screen.getByText(/Play Now/i);
//   fireEvent.click(playNowButton);
//   const modalElement = screen.getByTestId("modal");
//   expect(modalElement).toBeInTheDocument();
// });

// test("Clicking on the More Info button opens the modal", () => {
//   const movie = {
//     title: "Test Movie",
//     name: "Test Movie",
//     overview: "This is a test movie",
//     backdrop_path: "test.jpg",
//     poster_path: "test.jpg",
//   };
//   render(<HeroCard trendingMovie={movie} />);
//   const moreInfoButton = screen.getByText(/More Info/i);
//   fireEvent.click(moreInfoButton);
//   const modalElement = screen.getByTestId("modal");
//   expect(modalElement).toBeInTheDocument();
// });
