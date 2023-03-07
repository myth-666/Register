import "./App.css";
import {  useNavigate } from "react-router-dom";
export default function Regster() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Page2");
    
  };
  return (
    <>
      <div className="Register_box">
        <div className="Register_box_left">
          <ul>
            <li><label onClick={(e)=>(handleClick(e))}>Register</label></li>
            <li><label >Report</label></li>
          </ul>
        </div>
        <div className="Register_box_right"></div>
      </div>
    </>
  );
}
