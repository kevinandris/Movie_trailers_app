import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Layout from "../../(root)/layout";

test("Layout contains specific element", () => {
  render(<Layout />);
  expect(screen.getByTestId("specific-element")).toBeInTheDocument();
});

test("Renders Layout without errors", () => {
  expect(() => {
    render(<Layout />);
  }).not.toThrow();
});

test("Rendering with custom props", () => {
  const customProps = {
    prop1: "value1",
    prop2: "value2",
  };
  render(<Layout {...customProps} />);
});

test("Layout does not contain specific element", () => {
  render(<Layout />);
  expect(screen.queryByTestId("specific-element")).toBeNull();
});
