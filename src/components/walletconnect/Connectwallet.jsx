import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/address.jpg";

const Connectwallet = () => {
  const [connected, setConnected] = useState(true);
  const [account, setAccount] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown visibility
  const dropdownRef = useRef(null); // Ref to track the dropdown element

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setConnected(true);
        } else {
          setConnected(false);
        }
      });

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      window.open("https://metamask.io/download.html", "_blank");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAccount("");
  };

  const shortenAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
  };

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

  return (
    <>
      {connected ? (
        <ul className="d-flex align-items-center">
          <li className="nav-item">
            <Link
              style={{ fontSize: "large" }}
              className="nav-link nav-icon d-none d-md-block"
              to="/dashboard/postgig"
            >
              Post Gig
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
                {/* {shortenAddress(account)} */} Oxsjbi...ssdjh
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
                  <Link className="dropdown-item" to="/dashboard">
                    Change to Customer
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={disconnectWallet}
                    style={{ background: "none", border: "none" }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      ) : (
        <ul className="d-flex align-items-center">
          <li className="nav-item pe-3">
            <button onClick={connectWallet} type="button" className="walletbtn">
              Connect Wallet
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Connectwallet;
