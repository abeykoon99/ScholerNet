import React from "react";
import "./dsh.css"; // Import CSS file for styling

const Dashboard = () => {
  return (
    <div className="centered">
      <div className="dashboard">
        <div className="content">
          <h1 >Dashboard</h1>
          <p>Welcome to the user dashboard!</p>
          <div className="dashboard-links">
          <div className="dashboard-link">
              <a href="/n">Student Notices</a>
            </div>
            <div className="dashboard-link">
              <a href="/reg">Register for Project Group</a>
            </div>
            <div className="dashboard-link">
              <a href="/al">Change Project Group Details</a>
            </div>
            <div className="dashboard-link">
              <a href="/v">Research Paper Publication</a>
            </div>
            <div className="dashboard-link">
              <a href="/re">View research paper publication details</a>
            </div>
            <div className="dashboard-link">
              <a href="/re">View Semester 1 Marks</a>
            </div>
            <div className="dashboard-link">
              <a href="/v">View Semester 2 Marks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
