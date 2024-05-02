import { useState } from "react";
import { Link } from "react-router-dom";

import enterBtn from "../assets/img/username-btn.png";

export default function UsernameInput() {
  const [enteredUsername, setEnteredUsername] = useState("");

  function onSetUsername(value) {
    setEnteredUsername(value);
    localStorage.setItem("enteredUsername", value);
  }

  return (
    <section className="username-page">
      <div className="username-text">WHAT’S YOUR NAME?</div>
      <div className="input-container">
        <input
          type="text"
          name="username"
          value={enteredUsername}
          placeholder="YOUR FIRST NAME"
          onChange={(e) => onSetUsername(e.target.value)}
          autoFocus
          required
        />
        {enteredUsername && (
          <Link to="/upload">
            <img src={enterBtn} alt="enter" className="enterBtn" />
          </Link>
        )}
      </div>
    </section>
  );
}
