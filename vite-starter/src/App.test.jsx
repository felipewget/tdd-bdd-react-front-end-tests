import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  
  const headingElement = screen.getByRole('heading', {name: /learn react/i});
  // const headingElement = screen.getByText(/learn react/i); // work but not have tag
  // const headingElement = screen.getByText('learn react'); not work
  expect(headingElement).toBeInTheDocument();
});

test("Button starts with correct color", () => {
  const {container} = render(<App />);

  logRoles(container);

  // const buttonEl = screen.getByRole('button'); // any button
  const buttonEl = screen.getByRole('button', {name: /blue/i}); // any button

  expect(buttonEl).toHaveClass('red');
});

test("Button has with correct color after click", () => {
  const {container} = render(<App />);

  logRoles(container);

  // find the button
  const buttonEl = screen.getByRole('button', {name: /blue/i}); // any button
  expect(buttonEl).toHaveClass('red');

  // click
  fireEvent.click(buttonEl);

  // check the button text and color
  expect(buttonEl).toHaveTextContent(/red/i);

  expect(buttonEl).toHaveClass('blue');
});

test("Button starts with correct text", () => {
  
});

test("Button has with correct text after click", () => {
  
});

test("checkbox flow", () => {
  // render app
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", {
    name: /blue/i,
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});