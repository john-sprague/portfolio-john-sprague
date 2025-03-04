Here's a set of unit tests for your `SignUpPage` component using `@testing-library/react`. These tests cover user interactions, form validation, and localStorage behavior.
```javascript
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpPage from "../SignUpPage";

describe("SignUpPage Component", () => {
  let exitRegisteringMock;

  beforeEach(() => {
    exitRegisteringMock = jest.fn();
    render(<SignUpPage exitRegistering={exitRegisteringMock} />);
    localStorage.clear();
  });

  test("renders form fields and button", () => {
    expect(screen.getByLabelText(/Username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Sign Up/i })).toBeInTheDocument();
  });

  test("shows error when submitting with empty fields", () => {
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(screen.getByText(/Username is missing!/i)).toBeVisible();
  });

  test("shows error when password is too short", () => {
    fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: "Short1" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(screen.getByText(/Your password needs at least 8 characters/i)).toBeVisible();
  });

  test("shows error when password lacks capital letter", () => {
    fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: "lowercasepassword1" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));
    expect(screen.getByText(/Your password needs at least one capital letter!/i)).toBeVisible();
  });

  test("submits successfully with valid inputs", () => {
    fireEvent.change(screen.getByLabelText(/Username:/i), { target: { value: "testuser" } });
    fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: "ValidPass1" } });
    fireEvent.click(screen.getByRole("button", { name: /Sign Up/i }));

    expect(localStorage.getItem("users")).not.toBeNull();
    expect(exitRegisteringMock).toHaveBeenCalled();
  });
});
```


### **Overview of the Tests**
1. **Basic Rendering:** Ensures all form fields and the button are visible.
2. **Validation Errors:** Tests missing username, short passwords, and missing capital letters.
3. **Successful Submission:** Checks if valid inputs store user data in `localStorage` and call `exitRegistering`.

Would you like additional tests for edge cases or error handling?