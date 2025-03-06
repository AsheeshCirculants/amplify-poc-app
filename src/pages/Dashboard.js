import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-card" style={{width:"100%"}}>
        <h2 className="form-heading">Admin Dashboard</h2>
        <p className="form-description">
          Welcome to the User Management System. Here, you can manage users, view statistics, and perform quick actions.
        </p>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Users</h3>
            <p>120</p>
          </div>
          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <p>5 new users today</p>
          </div>
          <div className="dashboard-card">
            <h3>Quick Actions</h3>
            <Button variation="primary" onClick={() => navigate("/add-user")}>
              + Add User
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
