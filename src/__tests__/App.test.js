import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import App from "../App";


test("the form includes text inputs for name and email address", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});

test("renders all checkboxes and they are initially unchecked", () => {
  render(<App />);

  const interests = ["art", "burgers", "cars", "dancing"];

  interests.forEach((interest) => {
    const checkbox = screen.getByRole("checkbox", { name: new RegExp(interest, "i") });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });
});

test("typing in name and email fields updates their value", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);

  userEvent.type(nameInput, "Josh");
  userEvent.type(emailInput, "josh@example.com");

  expect(nameInput).toHaveValue("Josh");
  expect(emailInput).toHaveValue("josh@example.com");
});

test("clicking checkboxes toggles their state", () => {
  render(<App />);

  const artCheckbox = screen.getByRole("checkbox", { name: /art/i });
  expect(artCheckbox).not.toBeChecked();

  userEvent.click(artCheckbox);
  expect(artCheckbox).toBeChecked();

  userEvent.click(artCheckbox);
  expect(artCheckbox).not.toBeChecked();
});

test("submitting form displays thank-you message with name and interests", () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText(/name/i);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const burgersCheckbox = screen.getByRole("checkbox", { name: /burgers/i });
  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.type(nameInput, "Josh");
  userEvent.type(emailInput, "josh@example.com");
  userEvent.click(burgersCheckbox);
  userEvent.click(submitButton);

  expect(screen.getByText(/thank you for signing up, josh/i)).toBeInTheDocument();
  expect(screen.getByText(/burgers/i)).toBeInTheDocument();
});


// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
});
