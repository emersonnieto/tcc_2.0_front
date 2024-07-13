import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li><a href="#">teste</a></li>
        <li><a href="#">teste</a></li>
        <li><a href="#">teste</a></li>
        
        <div className="right-container">
          <li className="li-right"><a href="#">teste</a></li>
          <li className="li-right"><a href="#">teste</a></li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
