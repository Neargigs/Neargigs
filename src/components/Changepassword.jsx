import React from "react";

const Changepassword = () => {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="currentPassword"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Current Password
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="password"
              type="password"
              className="form-control"
              id="currentPassword"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="newPassword"
            className="col-md-4 col-lg-3 col-form-label"
          >
            New Password
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="newpassword"
              type="password"
              className="form-control"
              id="newPassword"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            style={{ color: "#b1bad3" }}
            for="renewPassword"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Re-enter New Password
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="renewpassword"
              type="password"
              className="form-control"
              id="renewPassword"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="usbutton">
            Change Password
          </button>
        </div>
      </form>
    </>
  );
};

export default Changepassword;
