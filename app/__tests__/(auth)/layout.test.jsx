import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Layout from "../../(auth)/layout";

// test("Layout contains specific element", () => {
//   render(<Layout />);
//   expect(screen.getByTestId("specific-element")).toBeInTheDocument();
// });

// test("Layout renders specific text", () => {
//   render(<Layout />);
//   expect(screen.getByText("Specific Text")).toBeInTheDocument();
// });

// test("Rendering Layout with specific props", () => {
//   render(<Layout prop1="value1" prop2="value2" />);
//   expect(screen.getByTestId("specific-element")).toBeInTheDocument();
// });

// test("Triggering a click event on a specific element in the Layout", async () => {
//   render(<Layout />);
//   const element = screen.getByTestId("specific-element");
//   fireEvent.click(element);
//   await waitFor(() => {
//     expect(screen.getByText("Clicked!")).toBeInTheDocument();
//   });
// });
