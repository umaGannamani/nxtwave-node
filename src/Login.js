import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const sampleEmail = "rahul@nxtwave";
  const samplePassword = "rahul@2021";

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === sampleEmail && password === samplePassword) {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp); 
      setIsOtpSent(true);
      setError("");
      alert(`OTP generated: ${otp}`); 
    } else {
      setError("Invalid email or password");
    }
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();

    if (otp === generatedOtp) {
      navigate("/thank-you");
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="login-container">
      {!isOtpSent ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Use: rahul@nxtwave"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Use: rahul@2021"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      ) : (
        <div className="otp-form">
          <h2>Enter OTP</h2>
          <form onSubmit={handleOtpVerification}>
            <div>
              <label>OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Verify OTP</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
