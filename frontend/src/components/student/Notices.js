import React from "react";
import "./Dashboard.css"; // Import CSS file for styling

const Dashboard = () => {
  return (
    <div className="centered">
      <div className="dashboard">
        <div className="content">
          <h1>Student Notices</h1>
          <p>Stay connected with notices!</p>
          <div className="dashboard-links">
            <div className="dashboard-link">
              <a href="/reg" className="red-text">Register for the Project Group before April 4th.</a>
            </div>
            <div className="dashboard-link">
              <a href="/re" className="red-text">Research Paper Publication link available until May 29th.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
