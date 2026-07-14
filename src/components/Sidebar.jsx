import "../styles/Sidebar.css";
import {
  FaBookOpen,
  FaHome,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Book</h2>
        <h2>Nest</h2>
      </div>

      <div className="menu">

        <NavLink to="/" className="menu-link">
          <div className="menu-item">
            <FaHome />
            <span>Dashboard</span>
          </div>
        </NavLink>

        <NavLink to="/library" className="menu-link">
          <div className="menu-item">
            <FaBookOpen />
            <span>My Library</span>
          </div>
        </NavLink>

        <NavLink to="/statistics" className="menu-link">
          <div className="menu-item">
            <FaChartBar />
            <span>Statistics</span>
          </div>
        </NavLink>

      </div>

      <div className="bottom-menu">

        <div className="menu-item">
          <FaCog />
          <span>Settings</span>
        </div>

        

      </div>

    </div>
  );
}

export default Sidebar;