import React, { useState } from "react";
import { login } from "../services/authService";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { RiCloseCircleLine } from "react-icons/ri";
import { decodeAndSaveToken } from "../services/utils";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State for email validity
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!isEmailValid) {
      setError("Email format is invalid.");
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const data = await login(email, password);
      console.log("Login successful:", data); // Handle successful login
      console.log("Token:", data.token); // Handle successful login
      // Store token
      // Assuming `data` contains a `token` property
      if (data.token) {
        // Store token
        localStorage.setItem("token", data.token);
        decodeAndSaveToken(data.token);
      } else {
        setError("Login failed: No token received.");
        return;
      }
      navigate("/beranda");
    } catch (err) {
      setError(err.message); // Display error from server
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    if (emailRegex.test(emailInput)) {
      setIsEmailValid(true);
      setError(""); // Clear error if email is valid
    } else {
      setIsEmailValid(false);
      setError("Email tidak valid"); // Set error if email is invalid
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="my-5 text-2xl font-bold">Aplikasi Entri Data</h1>
      <div className="form">
        <div className="title">
          Selamat datang,
          <br />
          <span>login untuk melanjutkan</span>
        </div>
        <input
          className={`input ${!isEmailValid ? 'border-red-600' : ''}`} // Add red border if email is invalid
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {(error === "Email tidak ditemukan" || error === "Email tidak valid") && <p className="flex items-center gap-1 px-2 py-1 text-base font-semibold bg-red-600 rounded-lg"><RiCloseCircleLine size={18} /> <span className="mb-[1px] text-[13px]">{error}</span></p>}
        <input
          className="input"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error === "Password salah" && <p className="flex items-center gap-1 px-2 py-1 text-base font-semibold bg-red-600 rounded-lg"><RiCloseCircleLine size={18} /> <span className="mb-[1px] text-[13px]">{error}</span></p>}
        <button
          className="button-confirm"
          onClick={handleLogin}
          disabled={!isEmailValid || isLoading} // Disable button if email is invalid or loading
        >
          Login →
        </button>
        {error !== "Password salah" && error !== "Email tidak ditemukan" && error !== "Email tidak valid" && <p className="font-semibold text-red-600">{error}</p>}

        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default Login;
