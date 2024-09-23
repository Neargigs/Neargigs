import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = ({ activeLink, setActive }) => {
  const gigcategory = [
    { id: 1, path: "freelance", name: "Freelance Jobs", icon: "bi-briefcase" },
    {
      id: 2,
      path: "fulltimejob",
      name: "Full-time Jobs",
      icon: "bi-briefcase-fill",
    },
    { id: 3, path: "mygigs", name: "My Gigs", icon: "bi-clipboard-check" },
    {
      id: 4,
      path: "myfreelance",
      name: "My Freelance Jobs",
      icon: "bi-briefcase",
    },
    {
      id: 5,
      path: "myfulltime",
      name: "My Full-time Jobs",
      icon: "bi-briefcase-fill",
    },
  ];
  const customercategory = [
    { id: 1, path: "browsegigs", name: "Browse Gigs", icon: "bi-briefcase" },

    { id: 2, path: "cusgigs", name: "My Gigs", icon: "bi-clipboard-check" },
    {
      id: 3,
      path: "cusfreelance",
      name: "My Freelance Jobs",
      icon: "bi-briefcase",
    },
    {
      id: 4,
      path: "cusfulltime",
      name: "My Full-time Jobs",
      icon: "bi-briefcase-fill",
    },
  ];

  const userlist = [
    { id: 1, path: "wallet", name: "Wallet", icon: "bi-wallet" },
    { id: 2, path: "wnj", name: "Governance", icon: "bi-bank" },
    { id: 3, path: "referrals", name: "Referrals", icon: "bi-people" },
    { id: 4, path: "settings", name: "Settings", icon: "bi-gear" },
  ];

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname, setActive]);

  const isActive = (path) => {
    return activeLink === path;
  };

  return (
    <aside id="sidebar" className={`sidebar ${"ml-[300px]"}`}>
      {/* freelance side navigation */}
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link gap-1 collapsed" to="/dashboard">
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {gigcategory.map((gignav) => (
          <li key={gignav.id} className="nav-item">
            <Link
              className={`nav-link gap-1 collapsed ${
                isActive(`/dashboard/${gignav.path.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              to={`/dashboard/${gignav.path.toLowerCase()}`}
            >
              <i className={`bi ${gignav.icon}`}></i>
              <span>{gignav.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* end freelance side navigation */}

      {/* customer side navigation */}
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link
            className="nav-link gap-1 collapsed"
            to="/dashboard/customerdash"
          >
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {customercategory.map((customer) => (
          <li key={customer.id} className="nav-item">
            <Link
              className={`nav-link gap-1 collapsed ${
                isActive(`/dashboard/${customer.path.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              to={`/dashboard/${customer.path.toLowerCase()}`}
            >
              <i className={`bi ${customer.icon}`}></i>
              <span>{customer.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* end customer side navigation */}

      <br />
      {/* Everyone side navigation */}
      <ul className="sidebar-nav" id="sidebar-nav">
        {userlist.map((user) => (
          <li key={user.id} className="nav-item">
            <Link
              className={`nav-link scrollto ${
                isActive(`/dashboard/${user.path.toLowerCase()}`)
                  ? "active"
                  : ""
              }`}
              onClick={() => setActive(`/${user.name.toLowerCase()}`)}
              to={`/dashboard/${user.path.toLowerCase()}`}
            >
              <i className={`bi ${user.icon}`}></i>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      {/* end everyone side navigation */}
    </aside>
  );
};

export default Sidenav;
