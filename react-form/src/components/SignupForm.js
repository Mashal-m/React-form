import React, { useState } from "react";
import "./SignupForm.css";
const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <>
      {/* Registration Form */}
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
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(firstName);
            }}
          />
        </div>
        <div className="signup__field">
          <label htmlFor="lastName">Last Name </label>
          <input
            value={lastName}
            name="lastName"
            type="text"
            id="lastName"
            placeholder="LastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>

        <button className="signup__button"> Register</button>
      </div>
    </>
  );
};

export default SignupForm;
