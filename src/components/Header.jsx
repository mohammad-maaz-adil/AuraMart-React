import { useState } from "react";
// import { LOGO_URL, LOGO_URL_2 } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import img1 from "url:../utils/AuraMart.png";

const Header = () => {
  const [buttonname, setbuttonname] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      
      <div className="logo-container">         
         <img className="logo" src={img1} alt="AuraMart Logo"/>
      </div>

      <div className="nav-bar">
        <ul >
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About US</Link>
          </li>
          <li>
            <Link to="/contact" >Contact US</Link>
          </li>
          <li>
            <Link to="/cart" >Cart</Link>
          </li>

          <button className="login" onClick={() => {
            buttonname == "Login" ? setbuttonname("Logout") : setbuttonname("Login");
          }}>
            {buttonname}
          </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;