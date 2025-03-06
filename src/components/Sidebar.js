import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthenticator, Button, Loader } from "@aws-amplify/ui-react";
import { FaTachometerAlt, FaUsers, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const { user, signOut } = useAuthenticator();
  const [loading, setLoading] = useState(false); // State for loading

  const handleLogout = async () => {
    setLoading(true); // Show loader
    await signOut();
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">Users Management</h2>
      <nav className="sidebar-menu" style={{ marginTop: "50px" }}>
        <Link to="/">
          <FaTachometerAlt className="icon" /> Dashboard
        </Link>
        <Link to="/users">
          <FaUsers className="icon" /> Users
        </Link>
        <Link to="/settings">
          <FaCog className="icon" /> Settings
        </Link>
      </nav>

      {/* Display logged-in user details */}
      <div className="user-info">
        <FaUser size={20} />
        <p>{user?.signInDetails?.loginId || "User"}</p>
      </div>

      {/* Logout button with loader */}
      <Button variation="primary" className="logout-btn" onClick={handleLogout} disabled={loading}>
        {loading ? <Loader size="small" /> : <FaSignOutAlt className="icon" style={{ color: "#FFF" }} />}
        {loading ? " Logging out..." : "Logout"}
      </Button>
    </div>
  );
};

export default Sidebar;
