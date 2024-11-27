import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (users[email]) {
      setError("User already exists! Please log in.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      // Save new user to localStorage
      users[email] = { password };
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup Successful! Redirecting to login...");
      navigate("/login"); // Redirect to Login page
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // Clear error when user starts typing
          }}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(""); // Clear error when user starts typing
          }}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
