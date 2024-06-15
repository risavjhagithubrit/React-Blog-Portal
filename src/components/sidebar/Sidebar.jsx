import "./sidebar.css"

export default function sidebar() {
  return (
    < div className="sidebar">
      < div className="sidebarItem">
      <span div className="sidebarTitle">ABOUT ME </span>
      <img src="https://drive.google.com/file/d/1okFuTgxsRHeSG_SaiovESECOeRx0TYf1/view?usp=sharing" 
      alt="" />
      <p>
        RKJ is the successful coder and developer!!
      
      </p>
      </div>
        <div className="sidebaritem">
          <span className="sidebarTitle">CATEGORIES</span>

<ul className="sidebarList">
  <li className="sidebarListItem">Life</li>
  <li className="sidebarListItem">Music</li>
  <li className="sidebarListItem">Career</li>
  <li className="sidebarListItem">Mission</li>
  <li className="sidebarListItem">Passion</li>

  </ul>       
   </div>
   <div className="sidebarItem">
    <span className="sidebarTitle">FOLLOW US</span>
    <div className="sidebarSocial"></div>
    <i className="topIcon fab fa-brands fa-facebook-f"></i>
        <i className="sidebarIcon fab fa-brands fa-x-twitter"></i>
        <i className="sidebarIcon fab fa-brands fa-instagram"></i>
        <i className="sidebarIcon fab fa-brands fa-linkedin"></i>
        </div>
   
    </div>
  )
}
