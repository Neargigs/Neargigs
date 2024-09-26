import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import { Toaster, toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword:formData.confirmPassword
      });

      if (response.status === 200) {
        toast.success("User registered successfully!");
        navigate("/dashboard");  // Redirect to dashboard page
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.msg || "Error during registration");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div>
      <div id="boxit">
        <div id="logodiv">
          <img id="logoimg" className="mx-auto" src={""} alt="Logo" />
        </div>

        <div className="auth-box">
          <div>
            <h2>Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <button id="optionbut" type="submit">
              Sign Up
            </button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button id="connbtn">      
           <img src={""} alt="Wallet"style={{width: "24px", height: "24px", borderRadius: "50%", marginRight: "8px",  }}  />  
             Connect Wallet           
          </button>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
