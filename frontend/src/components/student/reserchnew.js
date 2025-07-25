import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./button.css"; // Import styles from the first page
import "./sty.css"; // Import styles from the second page

export default function CombinedPage() {
  const { id } = useParams();

  // State variables from the first page
  const [r1, setr1] = useState(""); // title
  const [r2, setr2] = useState(""); // student
  const [r3, setr3] = useState(""); // cosupervisor
  const [r4, setr4] = useState(""); // supervisor
  const [r5, setr5] = useState(""); // journal
  const [r6, setr6] = useState(""); // issn
  const [r7, setr7] = useState(""); // reg number
  const [r8, setr8] = useState(""); // details
  const [r9, setr9] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  // State variables from the second page
  const [user, setUser] = useState({
    lreg: "",
    reg2: "",
    reg3: "",
    reg4: ""
  });

  // Destructuring user state
  const { lreg, reg2, reg3, reg4 } = user;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/register/get/${id}`);
        setUser(response.data.Register);
      } catch (error) {
        alert(error.message);
      }
    };
    loadUser();
  }, [id]);

  // Validation function from the first page
  function validateForm() {
    let isValid = true;
    if (!r1.trim() || !r2.trim() || !r3.trim() || !r4.trim() || !r5.trim() || !r6.trim() || !r7.trim() || !r8.trim()|| !r9.trim()) {
      setFormError("Please fill in all fields");
      isValid = false;
    }
    return isValid;
  }

  // Function to send data from the first page
  function sendData(e) {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const newData = {
        r1, // title
        r2, // student
        r3, // cosupervisor
        r4, // supervisor
        r5, // journal
        r6, // issn
        r7, // reg number
        r8, // details
        r9
      };
      axios
        .post("http://localhost:8070/register/adds", newData)
        .then(() => {
          alert("Registration Completed");
          window.location = "/r";
        })
        .catch((err) => {
          alert(err.response?.data?.error || "Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  // Function to handle changes in user state from the second page
  function handleUserChange(event, field) {
    setUser({ ...user, [field]: event.target.value });
  }

  return (
    
    <div className="container">
      {/* Form from the first page */}
      <form>
        <table className="table">
          <tbody>
           
            





    <div className="container">
  <p></p>
  <br></br>
  <b><font size="4">Student Group Details</font></b>
  <p></p>
  <br></br>
  <table className="table">
    <tbody>
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
                  onChange={(e) => handleUserChange(e, "lreg")}
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
            onChange={(e) => handleUserChange(e, "lreg")}
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
            onChange={(e) => handleUserChange(e, "reg2")}
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
            onChange={(e) => handleUserChange(e, "reg3")}
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
            onChange={(e) => handleUserChange(e, "reg4")}
          />
        </td>
      </tr>
    </tbody>
  </table>
  
</div>

  </tbody>
  </table>
  </form>
  <br></br>





      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="r1">Research Paper Title</label>
          <input
            type="text"
            className="form-control"
            id="r1"
            placeholder="Enter Title"
            value={r1}
            onChange={(e) => setr1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="r2">Students</label>
          <select
            className="form-control"
            id="r2"
            placeholder="Enter Students"
            value={r2}
            onChange={(e) => setr2(e.target.value)}
          >
            <option value="">Select Students</option>
            <option value="IT21159930">IT21159930</option>
            <option value="IT21182082">IT21182082</option>
            <option value="It21182564">It21182564</option>
            <option value="IT21176345">IT21176345</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="r4">Supervisors</label>
          <select
            className="form-control"
            id="r4"
            placeholder="Enter Supervisors"
            value={r4}
            onChange={(e) => setr4(e.target.value)}
          >
            <option value="">Select Supervisors</option>
            <option value="Dr.Shyam Reyal">Dr.Shyam Reyal</option>
            <option value="Ms.Nilushi Dias">Ms.Nilushi Dias</option>
            <option value="Mr.Kanishka Yapa">Mr.Kanishka Yapa</option>
            <option value="Mr.Madhuranga Perera">Mr.Madhuranga Perera</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="r3">Cosupervisors</label>
          <select
            className="form-control"
            id="r3"
            placeholder="Enter Cosupervisors"
            value={r3}
            onChange={(e) => setr3(e.target.value)}
          >
            <option value="">Select Cosupervisors</option>
            <option value="Dr.Shyam Reyal">Dr.Shyam Reyal</option>
            <option value="Ms.Nilushi Dias">Ms.Nilushi Dias</option>
            <option value="Mr.Kanishka Yapa">Mr.Kanishka Yapa</option>
            <option value="Mr.Madhuranga Perera">Mr.Madhuranga Perera</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="r5">Journal or Conference Name</label>
          <input
            type="text"
            className="form-control"
            id="r5"
            placeholder="Enter Journal"
            value={r5}
            onChange={(e) => setr5(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="r6">ISSN Number</label>
          <input
            type="text"
            className="form-control"
            id="r6"
            placeholder="Enter ISSN Number (If applicable.)"
            value={r6}
            onChange={(e) => setr6(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="r7">H5-Index</label>
          <input
            type="text"
            className="form-control"
            id="r7"
            placeholder="Enter H5-Index"
            value={r7}
            onChange={(e) => setr7(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="r8">Scopus indexing of the journal or conference.</label>
          <input
            type="text"
            className="form-control"
            id="r8"
            placeholder="Enter Link"
            value={r8}
            onChange={(e) => setr8(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="r9">Registration fee paid</label>
          <select
            className="form-control"
            id="r9"
            placeholder="Enter Cosupervisors"
            value={r9}
            onChange={(e) => setr9(e.target.value)}
          >
            <option value="">Registration fee paid</option>
            <option value="LKR">LKR</option>
            <option value="USD">USD</option>
           
          </select>
        </div>

        {formError && <div className="alert alert-danger">{formError}</div>}
        <div className="text-right">
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Form from the second page */}

  </div>
  )
}
































 