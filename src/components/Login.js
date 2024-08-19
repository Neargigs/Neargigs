import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/ngig-logo.png";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      navigate("/dashboard");
      toast.success("Login successful!");
    } catch (error) {
      console.log("login error", error);
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div>
      <div id="boxit">
        <div id="logodiv">
          <img id="logoimg" className="mx-auto" src={logo} alt="Logo" />
        </div>

        <div className="auth-box">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Login</h2>
            </div>
            <div>
              <span style={{ color: "white" }}>Welcome back!</span>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              style={{ width: "100%" }}
              type="submit"
              id="optionbut"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
