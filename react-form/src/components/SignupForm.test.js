import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "./SIgnupForm";
import { fireEvent } from "@testing-library/react";

describe("SignupForm", () => {
  test("First Name input Exist", () => {
    render(<SignupForm />);
    const firstNameInput = screen.getByTestId("fname-input");
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute("type", "text");
  });
  test("Last Name input Exist", () => {
    render(<SignupForm />);
    const firstNameInput = screen.getByTestId("lname-input");
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute("type", "text");
  });

  test("Email Input Exist", () => {
    render(<SignupForm />);

    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });
  test("Password Input Exist", () => {
    render(<SignupForm />);

    const inputEl = screen.getByTestId("pwd-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
  });

  test("Submit Form and Validation", () => {
    const { getByTestId } = render(<SignupForm />);
    fireEvent.click(getByTestId("submit-form"));
    const firstNameInput = getByTestId("fname-input");
    fireEvent.change(firstNameInput, { target: { value: "abcdefghefg" } });
    fireEvent.click(getByTestId("submit-form"));
    expect(screen.getByTestId("fname-error").textContent).toBe(
      " First Name should not be greater than 8"
    );

    const lastNameInput = getByTestId("lname-input");
    fireEvent.change(lastNameInput, { target: { value: "abcdefghefg" } });
    fireEvent.click(getByTestId("submit-form"));
    expect(screen.getByTestId("lname-error").textContent).toBe(
      "Last Name should not be greater than 8"
    );

    const pwdNameInput = getByTestId("pwd-input");
    fireEvent.change(pwdNameInput, { target: { value: "abcdefghefg" } });
    fireEvent.click(getByTestId("submit-form"));
    expect(screen.getByTestId("pwd-error").textContent).toBe(
      "Password Name should not be greater than 8"
    );

    const emailNameInput = getByTestId("email-input");
    fireEvent.change(emailNameInput, { target: { value: "test@mail.com" } });
    expect(emailNameInput.value).toMatch(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    );
  });
});
