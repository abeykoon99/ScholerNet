import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import "./button.css";
import "./secondSty.css";
import jsPDF from "jspdf";

import "jspdf-autotable";
import { saveAs } from "file-saver";


import { Link } from "react-router-dom";

export default function ShowProgrp() {
  const [Progrp, setProgrp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:8070/register")
      .then((response) => {
        setProgrp(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Progrp:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (progrpId) => {
    console.log("Editing progrp with ID:", progrpId);
  };

  const deleteProgrp = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/register/delete/${id}`);
      setProgrp(Progrp.filter((reg) => reg._id !== id));
      window.alert("Group deleted!");
    } catch (error) {
      console.error("Error deleting Progrp:", error.message);
    }
  };

  const filteredRows = Progrp.filter(row => {
    return (
      String(row.leader).toLowerCase().includes(search.toLowerCase()) ||
      String(row.lreg).toLowerCase().includes(search.toLowerCase()) 
    );
  });

  const generateReport = () => {
    // Create new jsPDF instance
    const doc = new jsPDF();
    
  
    // Define table columns
    const columns = [
      { title: "Students", key: "leader" },
      { title: "Registration Number", key: "lreg" },
      { title: "Email", key: "lmail" },
      { title: "Contact", key: "lcont" },
      { title: "Intake", key: "intake" },
      { title: "Specialization", key: "spec" },
      { title: "Project Title", key: "ptitle" },
      { title: "Area", key: "area" },
      { title: "Project Type", key: "ptype" },
      { title: "Supervisors", key: "p2" },
      { title: "Cosupervisors", key: "p3" }
    ];
  
    // Loop over each group and add its details to the rows array
    const rows = [];
    filteredRows.forEach(group => {
      const groupDetails = columns.map(column => {
        return group[column.key];
      });
      rows.push(groupDetails);
    });
  
    // Add table headers
    doc.autoTable({
      head: [columns.map(column => column.title)],
      startY: 10
    });
  
    // Add table rows
    doc.autoTable({
      body: rows,
      startY: doc.lastAutoTable.finalY + 5
    });
  
    // Save the PDF
    doc.save("Project_Report.pdf");
  };
  
  
  


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Project Group Details</h1>
      &nbsp;&nbsp;
      <div style={{ display: 'flex',textAlign:'center', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <input 
            className="form-control" 
            type="search" 
            placeholder="Search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            style={{ width: '400px',Align:'right' }} 
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={generateReport}>
            Generate Report
          </button>
        </div>
      </div>
      <div className="container">
        {filteredRows.map((register, index) => (
          <div key={register._id} className="group-details">
            <h4>Group {index + 1}</h4>
            <div>
              <Link
                to={`/update/${register._id}`}
                className="btn btn-warning"
                onClick={() => handleEdit(register._id)}
              >
                <i className="fas fa-edit"></i>&nbsp;Edit
              </Link>
              &nbsp;&nbsp;
              <button
                className="btn btn-danger custom-delete-btn"
                onClick={() => deleteProgrp(register._id)}
              >
                <i className="fa fa-trash-alt"></i>&nbsp;Delete
              </button>
              &nbsp;&nbsp;
            </div>
            <br></br>
            <div className="container" style={{ backgroundColor: "lightgray" }}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Students</th>
                    <th>Registration Number</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Intake</th>
                    <th>Specialization</th>
                    <th>Project Title</th>
                    <th>Area</th>
                    <th>Project Type</th>
                    <th>Supervisors</th>
                    <th>Cosupervisors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{register.leader}</td>
                    <td><a href={`/get/${register._id}`} style={{textDecoration:'none'}}>
                      {register.lreg}</a></td>
                    <td>{register.lmail}</td>
                    <td>{register.lcont}</td>
                    <td>{register.intake}</td>
                    <td>{register.spec}</td>
                    <td>{register.ptitle}</td>
                    <td>{register.area}</td>
                    <td>{register.ptype}</td>
                    <td>{register.p2}</td>
                    <td>{register.p3}</td>
                  </tr>
                  <tr>
                    <td>{register.mem2}</td>
                    <td>{register.reg2}</td>
                    <td>{register.mail2}</td>
                    <td>{register.cont2}</td>
                    <td colSpan="5"></td>
                  </tr>
                  <tr>
                    <td>{register.mem3}</td>
                    <td>{register.reg3}</td>
                    <td>{register.mail3}</td>
                    <td>{register.cont3}</td>
                    <td colSpan="5"></td>
                  </tr>
                  <tr>
                    <td>{register.mem4}</td>
                    <td>{register.reg4}</td>
                    <td>{register.mail4}</td>
                    <td>{register.cont4}</td>
                    <td colSpan="5"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
