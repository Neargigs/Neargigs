import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Approutes from "./components/Approutes";
import { NetworkId } from "./components/utils/config";
import { NearContext, Wallet } from "./components/utils/near";

const wallet = new Wallet({ networkId: NetworkId });

function App() {
  const [signedAccountId, setSignedAccountId] = useState("");

  useEffect(() => {
    wallet.startUp(setSignedAccountId);
  }, []);

  return (
    <NearContext.Provider value={{ wallet, signedAccountId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Approutes />} />
        </Routes>
      </Router>
    </NearContext.Provider>
  );
}

export default App;
