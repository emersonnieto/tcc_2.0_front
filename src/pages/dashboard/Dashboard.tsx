import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import BalanceCard from "../../components/balancecard/BalanceCard";
const Dashborad: React.FC = () => {
  return (
    <>
      <main>
      <Navbar />
      <BalanceCard />
      </main>
    </>
  );
};
export default Dashborad;
