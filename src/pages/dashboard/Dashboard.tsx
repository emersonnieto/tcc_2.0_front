import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../components/navbar/Navbar";
import BalanceCard from "../../components/balancecard/BalanceCard";
import NotificationCard from "../../components/notificationcard/NotificationCard";
import MonthYearPicker from "../../components/monthyearpicker/MonthYearPicker";

const Dashborad: React.FC = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="monthyearpicker">
        <MonthYearPicker />
      </div>
      <div className="cards">
        <BalanceCard />
        <NotificationCard />
      </div>
    </div>
  );
};
export default Dashborad;
