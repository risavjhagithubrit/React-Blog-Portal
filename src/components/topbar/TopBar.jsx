import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
        <div className="topleft">
        <i className="topIcon fab fa-brands fa-facebook-f"></i>
        <i className="topIcon fab fa-brands fa-x-twitter"></i>
        <i className="topIcon fab fa-brands fa-instagram"></i>
        <i className="topIcon fab fa-brands fa-linkedin"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
            <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"> 
            <Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem">
            <Link className="link" to="/">WRITE</Link></li>          
            <li className="topListItem">
              {user && "LOGOUT"}
              </li>
            
          </ul>
          </div>
        <div className="topRight">
          {
            user ? (
              <img
              className="topImg"
               src="D:\IMAGE\user.png" alt="" />
               
               ) : (
                <ul className="topList">
                <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
              <Link className="link" to="/register">LOGIN</Link>
                </li>
                </ul>
               )
           }
         
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>

        </div>
        </div>
  )
}
