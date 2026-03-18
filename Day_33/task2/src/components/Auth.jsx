// Implement Password Authentication:
// 1. Create a modal or prompt for entering a static password.
// 2. Validate the password on application load. If incorrect, restrict access to the app.



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const correctPassword = "password123";
  const [enteredPassword, setEnteredPassword] = useState('');
  const navigate = useNavigate();

  const checkPassword = () => {
    if (enteredPassword === correctPassword) {
      localStorage.setItem("isAuth", "true");
      navigate("/home");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Enter Password</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={checkPassword}>Submit</button>
    </div>
  );
}

export default Auth;