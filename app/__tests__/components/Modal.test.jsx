// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import Modal from "../../../components/Modal";

// test("asd", () => {
//   render(<Modal />);
// });

// test("Displays movie details correctly", () => {
//   const movie = {
//     id: 1,
//     title: "Test Movie",
//     release_date: "2022-01-01",
//     overview: "This is a test movie",
//     vote_average: 7.5,
//   };
//   render(<Modal movie={movie} />);

//   expect(screen.getByText("Name:")).toBeInTheDocument();
//   expect(screen.getByText("Test Movie")).toBeInTheDocument();
//   expect(screen.getByText("Release Date:")).toBeInTheDocument();
//   expect(screen.getByText("2022-01-01")).toBeInTheDocument();
//   expect(screen.getByText("This is a test movie")).toBeInTheDocument();
//   expect(screen.getByText("Rating:")).toBeInTheDocument();
//   expect(screen.getByText("7.5")).toBeInTheDocument();
// });

// test("Handles adding and removing movies from user's list correctly", async () => {
//   const movie = {
//     id: 1,
//     title: "Test Movie",
//   };
//   const session = {
//     user: {
//       email: "test@example.com",
//     },
//   };
//   const user = {
//     favorites: [],
//   };
//   const updatedUser = {
//     favorites: [1],
//   };

//   jest.spyOn(global, "fetch").mockImplementation((url) => {
//     if (url === `/api/user/${session.user.email}`) {
//       return Promise.resolve({
//         json: () => Promise.resolve(user),
//       });
//     } else if (url === `/api/user/${session.user.email}`) {
//       return Promise.resolve({
//         json: () => Promise.resolve(updatedUser),
//       });
//     }
//   });

//   render(<Modal movie={movie} />);

//   await waitFor(() => {
//     expect(screen.getByText("Add To List")).toBeInTheDocument();
//   });

//   fireEvent.click(screen.getByText("Add To List"));

//   await waitFor(() => {
//     expect(screen.getByText("RemoveCircle")).toBeInTheDocument();
//   });

//   fireEvent.click(screen.getByText("RemoveCircle"));

//   await waitFor(() => {
//     expect(screen.getByText("AddCircle")).toBeInTheDocument();
//   });
// });

// test("Fetching movie details with videos and genres", async () => {
//   const movie = {
//     id: 1,
//   };
//   const videos = {
//     results: [
//       {
//         type: "Trailer",
//         key: "abc123",
//       },
//     ],
//   };
//   const genres = [
//     {
//       id: 1,
//       name: "Action",
//     },
//     {
//       id: 2,
//       name: "Adventure",
//     },
//   ];

//   jest.spyOn(global, "fetch").mockImplementation((url) => {
//     if (
//       url ===
//       `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`
//     ) {
//       return Promise.resolve({
//         json: () => Promise.resolve({ videos, genres }),
//       });
//     }
//   });

//   render(<Modal movie={movie} />);

//   await waitFor(() => {
//     expect(screen.getByText("Trailer")).toBeInTheDocument();
//     expect(screen.getByText("Action")).toBeInTheDocument();
//     expect(screen.getByText("Adventure")).toBeInTheDocument();
//   });
// });

// test("Fetching movie details without videos", async () => {
//   const movie = {
//     id: 1,
//   };
//   const genres = [
//     {
//       id: 1,
//       name: "Action",
//     },
//     {
//       id: 2,
//       name: "Adventure",
//     },
//   ];

//   jest.spyOn(global, "fetch").mockImplementation((url) => {
//     if (
//       url ===
//       `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`
//     ) {
//       return Promise.resolve({
//         json: () => Promise.resolve({ genres }),
//       });
//     }
//   });

//   render(<Modal movie={movie} />);

//   await waitFor(() => {
//     expect(screen.queryByText("Trailer")).not.toBeInTheDocument();
//     expect(screen.getByText("Action")).toBeInTheDocument();
//     expect(screen.getByText("Adventure")).toBeInTheDocument();
//   });
// });
