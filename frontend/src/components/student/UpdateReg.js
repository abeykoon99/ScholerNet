import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./sty.css";

export default function UpdateRegister() {
  const { id } = useParams();
  const [user, setUser] = useState({
    leader: "",
    lmail: "",
    intake: "",
    lcont: "",
    lreg: "",
    spec: "",
    mem2: "",
    mem3: "",
    mem4: "",
    reg2: "",
    reg3: "",
    reg4: "",
    mail2: "",
    mail3: "",
    mail4: "",
    cont2: "",
    cont3: "",
    cont4: "",
    ptitle: "",
    area: "",
    ptype: "",
    p2: "",
    p3: ""
  });

  const { leader, lmail, intake, lcont, lreg, spec, mem2, mem3, mem4, reg2, reg3, reg4, mail2, mail3, mail4, cont2, cont3, cont4, ptitle, area, ptype,p2,p3 } = user;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/register/get/${id}`);
        console.log(response.data);
        setUser(response.data.Register);
      } catch (error) {
        alert(error.message);
      }
    };
    loadUser();
  }, [id]);


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8070/register/update/${id}`, user);
      setUser(response.data);
      alert("Group Details Updated")
      window.location = "/";
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="container">
      <p></p>
      <br></br><b><font size="4">Update Student Group Details</font></b>
      <p></p>
      <br></br><form onSubmit={onSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <label htmlFor="leader">Leader Name</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="leader"
                  defaultValue={leader}
                  placeholder="Edit student name"
                  name="leader"
                  value={leader}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mem2">Member 2 Name</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mem2"
                  placeholder="Edit Member 2"
                  name="mem2"
                  value={mem2}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mem3">Member 3 Name</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mem3"
                  placeholder="Edit Member 3"
                  name="mem3"
                  value={mem3}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
            <td>
                <label htmlFor="mem4">Member 4 Name</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mem4"
                  placeholder="Edit Member 4"
                  name="mem4"
                  value={mem4}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>

          
            <tr>
              <td>
                <label htmlFor="lreg">Leader Registration Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="lreg"
                  placeholder="Edit Registration Number"
                  name="lreg"
                  value={lreg}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="reg2">Member 2 Registration Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="reg2"
                  placeholder="Edit Registration Number"
                  name="reg2"
                  value={reg2}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="reg3">Member 3 Registration Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="reg3"
                  placeholder="Edit Registration Number"
                  name="reg3"
                  value={reg3}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="reg4">Member 4 Registration Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="reg4"
                  placeholder="Edit Registration Number"
                  name="reg4"
                  value={reg4}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>


            <tr>
              <td>
                <label htmlFor="lmail">Leader Email Address</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="lmail"
                  placeholder="Edit email address"
                  name="lmail"
                  value={lmail}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mail2">Member 2 Email Address</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mail2"
                  placeholder="Edit Email Address"
                  name="mail2"
                  value={mail2}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mail3">Member 3 Email Address</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mail3"
                  placeholder="Edit Email Address"
                  name="mail3"
                  value={mail3}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mail4">Member 4 Email Address</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="mail4"
                  placeholder="Edit Email Address"
                  name="mail4"
                  value={mail4}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>


            <tr>
              <td>
                <label htmlFor="lcont">Leader Contact Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="lcont"
                  placeholder="Edit Contact Number"
                  name="lcont"
                  value={lcont}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
  
            <tr>
              <td>
                <label htmlFor="cont2">Member 2 Contact Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="cont2"
                  placeholder="Edit Contact Number"
                  name="cont2"
                  value={cont2}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="cont3">Member 3 Contact Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="cont3"
                  placeholder="Edit Contact Number"
                  name="cont3"
                  value={cont3}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
  
            <tr>
              <td>
                <label htmlFor="cont4">Member 4 Contact Number</label>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="cont4"
                  placeholder="Edit Contact Number"
                  name="cont4"
                  value={cont4}
                  onChange={(e) => onInputChange(e)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="form-group">
          <label htmlFor="intake">Intake</label>
          <select
            className="form-control"
            id="intake"
            placeholder="Select Intake"
            value={intake}
            onChange={onInputChange}
            name="intake"
          >
            <option value="">Select Intake</option>
            <option value="June Intake">June Intake</option>
            <option value="Regular Intake">Regular Intake</option>
          </select>
        </div>

        
                  <div className="form-group">
          <label htmlFor="spec">Specialization</label>
          <select
            className="form-control"
            id="spec"
            placeholder="Edit Specialization"
            value={spec}
            onChange={onInputChange}
            name="spec"
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
          <label htmlFor="ptitle">Project Title</label>
          <input
            type="text"
            className="form-control"
            id="ptitle"
            placeholder="Project Title"
            value={ptitle}
            onChange={onInputChange}
            name="ptitle"
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Area</label>
          <input
            type="text"
            className="form-control"
            id="area"
            placeholder="Area"
            value={area}
            onChange={onInputChange}
            name="area"
          />
        </div>

        
        <div className="form-group">
          <label htmlFor="ptype">Project type</label>
          <select
            className="form-control"
            id="ptype"
            placeholder="Edit project type"
            value={ptype}
            onChange={onInputChange}
            name="ptype"
          >
            <option value="">Select Project type</option>
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
            placeholder="Edit Supervisors"
            value={p2}
            onChange={onInputChange}
            name="p2"
          >
            <option value="">Select Project Supervisors</option>
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
            placeholder="Edit Cosupervisors"
            value={p3}
            onChange={onInputChange}
            name="p3"
          >
            <option value="">Select Project Cosupervisors</option>
            <option value="Dr.Shyam Reyal">Dr.Shyam Reyal</option>
            <option value="Ms.Nilushi Dias">Ms.Nilushi Dias</option>
            <option value="Mr.Kanishka Yapa">Mr.Kanishka Yapa</option>
            <option value="Mr.Madhuranga Perera">Mr.Madhuranga Perera</option>
          </select>
        </div>

        <button type="submit" className="btn btn-warning">
        <i className="fas fa-edit"></i>&nbsp;Update Group details
        </button><p></p>
      </form>
    
    </div>
  );
}