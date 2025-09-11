import { useState } from "react";
import { LOGO_URL, LOGO_URL_2 } from "../utils/constants";
const Header = () => {
  const [buttonname, setbuttonname] = useState("Login");
  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo.png"></img>
        <img className="logo2" src={LOGO_URL_2} alt="Logo2.png"></img>
      </div>

      <div className="nav-bar">
        <ul >
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About Us</li></a>
          <a href="#"><li>Contact Us</li></a>
          <a href="#"><li>Cart</li></a>
          
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