import React, { useState } from "react";
import axios from "axios";
import "./button.css";

export default function AddEmployee() {
  const [leader, setLeader] = useState("");
  const [lmail, setLmail] = useState("");
  const [intake, setIntake] = useState("");
  const [lcont, setLcont] = useState("");
  const [lreg, setLreg] = useState("");
  const [spec, setSpec] = useState("");
  const [mem2, setMem2] = useState(""); 
  const [mem3, setMem3] = useState(""); 
  const [mem4, setMem4] = useState("");
  const [reg2, setReg2] = useState("");
  const [reg3, setReg3] = useState("");
  const [reg4, setReg4] = useState("");
  const [mail2, setMail2] = useState("");
  const [mail3, setMail3] = useState("");
  const [mail4, setMail4] = useState("");
  const [cont2, setCont2] = useState("");
  const [cont3, setCont3] = useState("");
  const [cont4, setCont4] = useState("");
  const [ptitle, setPtitle] = useState("");
  const [area, setArea] = useState("");
  const [ptype, setPtype] = useState("");
  const [p2, setp2] = useState("");
  const [p3, setp3] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  function validateForm() {
    if (!leader.trim() || !lmail.trim() || !intake.trim() || !lcont.trim() || !lreg.trim() || !spec.trim() ||
        !mem2.trim() || !reg2.trim() || !mail2.trim() || !cont2.trim() || !mem3.trim() || !reg3.trim() ||
        !mail3.trim() || !cont3.trim() || !mem4.trim() || !reg4.trim() || !mail4.trim() || !cont4.trim() ||
        !ptitle.trim() || !area.trim() || !ptype.trim() || !p2.trim() || !p3.trim()) {
      setFormError("Please fill in all fields");
      return false;
    }
    return true;
  }

  function sendData(e) {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const newEmployee = {
        leader,
        lmail,
        intake,
        lcont,
        lreg,
        spec,
        mem2,
        mem3,
        mem4,
        reg2,
        reg3,
        reg4,
        mail2,
        mail3,
        mail4,
        cont2,
        cont3,
        cont4,
        ptitle,
        area,
        ptype,
        p2,
        p3
      };
      axios
        .post("http://localhost:8070/register/add", newEmployee)
        .then(() => {
          alert("Registration Completed");
          window.location = "/";
        })
        .catch((err) => {
          alert(err.response?.data?.error || "Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  const nextPage = () => {
    setCurrentPage(2);
  };

  const prevPage = () => {
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <table className="table">
          <tbody>
            {currentPage === 1 && (
              <tr>
                <td colSpan="4">
                  <div className="form-group">
                    <b>Register Project Group</b>
                  </div>
                </td>
              </tr>
            )}
            <div className="container-lg" style={{backgroundColor:"lightgray"}}>

             {currentPage === 1 && (
              <tr>
                <td colSpan="4">
                  <div className="form-group">
                    <b>Group Details</b>
                  </div>
                </td>
              </tr>
            )}
            {currentPage === 1 && (
              <tr>
                <td>
                  <label htmlFor="leader">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="leader"
                    placeholder="Enter Leader Name"
                    required
                    value={leader}
                    onChange={(e) => setLeader(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="lreg">Student Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lreg"
                    placeholder="Enter Registration Number"
                    required
                    value={lreg}
                    onChange={(e) => setLreg(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="lmail">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lmail"
                    placeholder="Enter Email Address"
                    required
                    value={lmail}
                    onChange={(e) => setLmail(e.target.value)}
                  />
                </td>
                <td>
                  <label htmlFor="lcont">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lcont"
                    placeholder="Enter Contact Number"
                    required
                    value={lcont}
                    onChange={(e) => setLcont(e.target.value)}
                  />
                </td>
              </tr>             
            )}

{currentPage === 1 && (
              <tr>
                <td>
              
                  <input
                    type="text"
                    className="form-control"
                    id="mem2"
                    placeholder="Enter Member 2 Name"
                    required
                    value={mem2}
                    onChange={(e) => setMem2(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="reg2"
                    placeholder="Enter Registration Number"
                    required
                    value={reg2}
                    onChange={(e) => setReg2(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="mail2"
                    placeholder="Enter Email Address"
                    required
                    value={mail2}
                    onChange={(e) => setMail2(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="cont2"
                    placeholder="Enter Contact Number"
                    required
                    value={cont2}
                    onChange={(e) => setCont2(e.target.value)}
                  />
                </td>
              </tr>

              
            )}

{currentPage === 1 && (
              <tr>
                <td>
              
                  <input
                    type="text"
                    className="form-control"
                    id="mem3"
                    placeholder="Enter Member 3 Name"
                    required
                    value={mem3}
                    onChange={(e) => setMem3(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="reg3"
                    placeholder="Enter Registration Number"
                    required
                    value={reg3}
                    onChange={(e) => setReg3(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="lmail"
                    placeholder="Enter Email Address"
                    required
                    value={mail3}
                    onChange={(e) => setMail3(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="lcont"
                    placeholder="Enter Contact Number"
                    required
                    value={cont3}
                    onChange={(e) => setCont3(e.target.value)}
                  />
                </td>
              </tr>

              
            )}

{currentPage === 1 && (
              <tr>
                <td>
              
                  <input
                    type="text"
                    className="form-control"
                    id="leader"
                    placeholder="Enter Member 4 Name"
                    required
                    value={mem4}
                    onChange={(e) => setMem4(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="lreg"
                    placeholder="Enter Registration number"
                    required
                    value={reg4}
                    onChange={(e) => setReg4(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="lmail"
                    placeholder="Enter Email Address"
                    required
                    value={mail4}
                    onChange={(e) => setMail4(e.target.value)}
                  />
                </td>
                <td>
                  
                  <input
                    type="text"
                    className="form-control"
                    id="lcont"
                    placeholder="Enter Contact Number"
                    required
                    value={cont4}
                    onChange={(e) => setCont4(e.target.value)}
                  />
                </td>
              </tr>

              
            )}
            </div>
          
            {currentPage === 2 && (
              <tr>
                <td colSpan="4">
                  <div className="form-group">
                    <b>Register Project Group</b>
                  </div>
                </td>
              </tr>
            )}
            <div className="container" style={{backgroundColor:"lightgray"}}>

            {currentPage === 2 && (
              <tr>
                <td colSpan="4">
                  <div className="form-group">
                    <label htmlFor="intake">Intake</label>
                    <select
                      className="form-control"
                      id="intake"
                      placeholder="Select Intake"
                      required
                      value={intake}
                      onChange={(e) => setIntake(e.target.value)}
                    >
                      <option value="">Select Intake</option>
                      <option value="June Intake">June Intake</option>
                      <option value="Regular Intake">Regular Intake</option>
                    </select>
                  </div>
                </td>
              </tr>
            )}
            {currentPage === 2 && (
              <tr>
                <td colSpan="4">
                  <div className="form-group">
                    <label htmlFor="spec">Specialization</label>
                    <select
                      className="form-control"
                      id="spec"
                      placeholder="Enter Specialization"
                      required
                      value={spec}
                      onChange={(e) => setSpec(e.target.value)}
                    >
                      <option value="">Select Specialization</option>
                      <option value="IT">IT</option>
                      <option value="SE">SE</option>
                      <option value="IS">IS</option>
                      <option value="CS">CS</option>
                      <option value="DS">DS</option>
                      <option value="CSNE">CSNE</option>
                    </select>
                  </div>

              <div className="form-group">
              <label htmlFor="mem3">Project Title</label>
              <input
                type="text"
                className="form-control"
                id="ptitle"
                placeholder="Project Title"
                required
                value={ptitle}
                onChange={(e) => setPtitle(e.target.value)}
              />
            </div>

              <div className="form-group">
              <label htmlFor="area">Research Area</label>
              <input
                type="text"
                className="form-control"
                id="area"
                placeholder="Area"
                required
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            
                  <div className="form-group">
              <label htmlFor="type">Project type</label>
              <select
                type="text"
                className="form-control"
                id="type"
                placeholder="Project type"
                required
                value={ptype}
                onChange={(e) => setPtype(e.target.value)}
              >
             <option value="">Select Project Type</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Natural Language Processing">Natural Language Processing</option>
                      <option value="Intelligent Systems">Intelligent Systems</option>
                      <option value="Robotics">Robotics</option>
                      
                    </select>
                  </div>
                  <div className="form-group">
          <label htmlFor="p2">Supervisors</label>
          <select
            className="form-control"
            id="p2"
            placeholder="Enter Supervisors"
            value={p2}
            onChange={(e) => setp2(e.target.value)}
          >
            <option value="">Select Supervisors</option>
            <option value="Dr.Shyam Reyal">Dr.Shyam Reyal</option>
            <option value="Ms.Nilushi Dias">Ms.Nilushi Dias</option>
            <option value="Mr.Kanishka Yapa">Mr.Kanishka Yapa</option>
            <option value="Mr.Madhuranga Perera">Mr.Madhuranga Perera</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="p3">Cosupervisors</label>
          <select
            className="form-control"
            id="p3"
            placeholder="Enter Cosupervisors"
            value={p3}
            onChange={(e) => setp3(e.target.value)}
          >
            <option value="">Select Cosupervisors</option>
            <option value="Dr.Shyam Reyal">Dr.Shyam Reyal</option>
            <option value="Ms.Nilushi Dias">Ms.Nilushi Dias</option>
            <option value="Mr.Kanishka Yapa">Mr.Kanishka Yapa</option>
            <option value="Mr.Madhuranga Perera">Mr.Madhuranga Perera</option>
          </select>
        </div>
                </td>
              </tr>
            )}
          </div>
          </tbody>
        </table>
        {formError && <div className="alert alert-danger">{formError}</div>}
        {currentPage === 1 && (
          <div className="text-right">
          <button type="button" className="btn btn-primary" onClick={nextPage}>
            Next
          </button>&nbsp;
        </div>
        )}
        {currentPage === 2 && (
          <div>
            <button type="button" className="btn btn-secondary mr-2" onClick={prevPage}>
              Previous
            </button>
            <button type="submit" className="btn btn-success" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
        }  