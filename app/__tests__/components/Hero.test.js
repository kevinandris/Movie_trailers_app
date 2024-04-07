import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Hero from "../../../components/Hero";

test("renders correct trending movie", async () => {
  const mockTrending = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockTrending),
  });

  render(<Hero />);

  await waitFor(() => {
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
  });
});

test("handles empty trending movie list", async () => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue([]),
  });

  render(<Hero />);

  await waitFor(() => {
    expect(screen.queryByText("Movie 1")).not.toBeInTheDocument();
  });
});
