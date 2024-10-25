import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/address.jpg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast, Toaster } from "sonner";

const Connectwallet = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown visibility
  const dropdownRef = useRef(null); // Ref to track the dropdown element
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  let userId;
  let userRole;

  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.userId;
    // console.log(userId);
  }
  if (user && user.role) {
    userRole = user.role;
    // console.log(user.role)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const changeUserRole = async (newRole) => {
    try {
      toast(
        `Switching to ${newRole === "Customer" ? "Customer" : "Freelancer"}...`,
        {
          icon: "🔄",
          duration: 3000,
        }
      );

      const response = await axios.post(
        "http://localhost:8080/api/v1/user/change-role",
        {
          userId,
          role: newRole,
        }
      );

      if (response.status === 200) {
        const updatedUser = { ...user, role: newRole };
        localStorage.setItem("user", JSON.stringify(updatedUser));

        toast.success(
          `Role switched to ${
            newRole === "Customer" ? "Customer" : "Freelancer"
          }!`,
          {
            duration: 2000,

            icon: "✅",
          }
        );

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    } catch (error) {
      console.error("Failed to change role:", error);
      toast.error("Failed to switch roles. Please try again.", {
        duration: 3000,

        icon: "❌",
      });
    }
  };

  return (
    <>
      <Toaster />
      <ul className="d-flex align-items-center">
        <li className="nav-item">
          <Link
            style={{ fontSize: "large" }}
            className="nav-link nav-icon d-none d-md-block"
            to={
              userRole === "Customer"
                ? "/dashboard/postjob"
                : "/dashboard/postgig"
            }
          >
            {userRole === "Customer" ? "Post Job" : "Post Gig"}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-icon" to="/dashboard/chat">
            <i className="bi bi-chat-dots"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-icon" to="/dashboard">
            <i className="bi bi-bell"></i>
          </Link>
        </li>
        <li className="nav-item pe-3 position-relative" ref={dropdownRef}>
          <button
            className="nav-link nav-profile d-flex align-items-center pe-0"
            onClick={toggleDropdown}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img src={logo} alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block ps-2">
              {/* {shortenAddress(account)} */} tolujohn.near
            </span>
            {/* Dropdown Icon */}
            <i className="bi bi-caret-down-fill ps-1"></i>
          </button>

          {/* Custom Dropdown */}
          {isDropdownOpen && (
            <ul className="custom-dropdown">
              <li>
                <Link className="dropdown-item" to="/dashboard/profile">
                  View your Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/dashboard/settings">
                  Settings
                </Link>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() =>
                    changeUserRole(
                      userRole === "Customer" ? "Talent" : "Customer"
                    )
                  }
                >
                  {userRole === "Customer"
                    ? "Switch to Talent"
                    : "Switch to Customer"}
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  className="dropdown-item"
                  style={{ background: "none", border: "none" }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default Connectwallet;
