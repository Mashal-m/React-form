import React, { useState } from "react";
import "./SignupForm.css";
const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const inputChangeHandler = (e) => {
    const { id, value } = e;
    switch (id) {
      case "firstName":
        setFirstName(value);
        console.log(firstName);
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
  return (
    <>
      <h3> Registration Form </h3>
      <div className="signup">
        <div className="signup__field">
          <label className="signup__field--name" htmlFor="firstName">
            First Name{" "}
          </label>
          <input
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={(e) => inputChangeHandler(e.target)}
          />
        </div>
        <div className="signup__field">
          <label htmlFor="lastName">Last Name </label>
          <input
            value={lastName}
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={(e) => inputChangeHandler(e.target)}
          />
        </div>
        <div className="signup__field">
          <label htmlFor="email">Email </label>
          <input
            value={email}
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            onChange={(e) => inputChangeHandler(e.target)}
          />
        </div>
        <div className="signup__field">
          <label htmlFor="password">Password </label>
          <input
            value={pwd}
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => inputChangeHandler(e.target)}
          />
        </div>

        <button className="signup__button"> Register</button>
      </div>
    </>
  );
};

export default SignupForm;
