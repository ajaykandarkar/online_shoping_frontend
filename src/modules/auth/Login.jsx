import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../../componenets/Navbar";
import { TopBar } from "../../componenets/TopBar";
import { Footer } from "../../componenets/Footer";
import TextField from "@mui/material/TextField";
import side_img from "../../assets/images/side_image.png";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate(); // Used for navigation
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const uri = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.post(`${uri}/login`, credentials);
      
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token); // Store token
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your email and password.");
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-5 m-0 p-0">
            <img
              style={{ width: "705px", height: "681px" }}
              src={side_img}
              alt="side_image"
            />
          </div>

          <div className="col-md-1 "></div>

          {/* Login Form Section */}
          <div className="col-md-5" style={{ marginTop: "227px" }}>
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            {/* Show Error Message */}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <TextField
                  label="Email or phone number"
                  variant="standard"
                  size="medium"
                  sx={{ width: "300px" }}
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <TextField
                  label="Password"
                  variant="standard"
                  size="medium"
                  type="password"
                  sx={{ width: "300px" }}
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-flex">
                <button type="submit" className="btn btn-danger">Login</button>
                <a href="#" className="margin-login-anchor">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
