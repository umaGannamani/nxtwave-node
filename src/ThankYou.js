import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css"

function ThankYou() {
  const navigate = useNavigate();

  const handleRemoveAccount = () => {
    alert("Your account has been removed.");
    navigate("/"); 
  };

  return (
    <div className="thankyou-container">
      <h2>Thank You for Logging In!</h2>
      <p>Welcome to your account!</p>
      <button onClick={handleRemoveAccount} className="remove-account-btn">
        Remove Account
      </button>
    </div>
  );
}

export default ThankYou;
