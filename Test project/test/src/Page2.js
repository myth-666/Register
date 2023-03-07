import "./Page2.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Page2() {
  const [Name, setName] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/");
    const url = "http://localhost:4000/insert";
    const data = { Name: Name, phonenumber: Phonenumber };
    const header={};
    axios.post(url, data, header).then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    });
  };
  return (
    <>
      <div className="Register_box">
        <div className="Register_box_left">
          <ul>
            <li>
              <label>Register</label>
            </li>
            <li>
              <label>Report</label>
            </li>
          </ul>
        </div>
        <div className="Register_box_right">
          <label>Name</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Phonenumber</label>
          <input
            type="text"
            value={Phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
          <div
            className="Register_box_right_button"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
