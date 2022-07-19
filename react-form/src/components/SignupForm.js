import React, { useState } from "react";
import "./SignupForm.css";
const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const mailFormat =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const inputChangeHandler = (e) => {
    const { id, value } = e;
    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPwd(value);
        break;
      default:
        return;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    {
      firstName === "" ||
        lastName === "" ||
        email === "" ||
        (pwd === "" && alert("please all fields"));
    }
    {
      firstName.length > 0 && firstName.length > 8
        ? setFNameError("First Name should not be greater than 8")
        : setFNameError(" ");
    }
    {
      lastName.length > 0 && lastName.length > 8
        ? setLNameError("Last Name should not be greater than 8")
        : setLNameError(" ");
    }
    {
      pwd.length > 0 && pwd.length > 8
        ? setPwdError("Password Name should not be greater than 8")
        : setPwdError(" ");
    }
    {
      email.length > 0 && !email.match(mailFormat)
        ? setEmailError("Email is invalid")
        : setEmailError(" ");
    }
  };
  return (
    <>
      <h3> Registration Form </h3>
      <form data-testid="form" onSubmit={submitHandler}>
        <div className="signup">
          <div className="signup__field">
            <label className="signup__field--Name" htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              data-testid="fname-input"
              value={firstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={(e) => inputChangeHandler(e.target)}
            />
            <p data-testid="fname-error" className="signup__field__error">
              {" "}
              {fNameError}
            </p>
          </div>
          <div className="signup__field">
            <label htmlFor="lastName">Last Name </label>
            <input
              value={lastName}
              name="lastName"
              data-testid="lname-input"
              type="text"
              id="lastName"
              placeholder="Last Name"
              onChange={(e) => inputChangeHandler(e.target)}
            />
            <p data-testid="lname-error" className="signup__field__error">
              {lNameError}
            </p>
          </div>
          <div className="signup__field">
            <label htmlFor="email">Email </label>
            <input
              value={email}
              name="email"
              type="email"
              id="email"
              data-testid="email-input"
              placeholder="Email"
              onChange={(e) => inputChangeHandler(e.target)}
            />
            <p data-testid="email-error" className="signup__field__error">
              {emailError}
            </p>
          </div>
          <div className="signup__field">
            <label htmlFor="password">Password </label>
            <input
              value={pwd}
              name="password"
              type="password"
              id="password"
              data-testid="pwd-input"
              placeholder="Password"
              onChange={(e) => inputChangeHandler(e.target)}
            />
            <p data-testid="pwd-error" className="signup__field__error">
              {pwdError}
            </p>
          </div>

          <button
            data-testid="submit-form"
            type="submit"
            className="signup__button"
          >
            {" "}
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
