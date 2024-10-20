import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dash from "../components/Dash";
import logo from "../assets/address.jpg";

const Home = () => {
  const [isGamemodalOpen, setIsGamemodalOpen] = useState(false);

  const handleGamemodalClick = () => {
    setIsGamemodalOpen(true);
  };

  const handleCloseGamemodal = () => {
    setIsGamemodalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // claim
    handleCloseGamemodal();
  };
  return (
    <>
      <div className="col-lg-8">
        <div className="row">
          <Dash />

          {/* End quiz */}
        </div>
      </div>

      <Sidebar />
    </>
  );
};

export default Home;
