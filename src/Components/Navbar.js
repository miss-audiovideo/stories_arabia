// import React, { useState } from "react";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import "../Components/Navbar.css";

// const Navbar = () => {
//   const [style, setStyle] = useState("humburger-menu-hidden");
//   const toggleMenu = () => {
//     if (style === "humburger-menu-hidden") {
//       setStyle("humburger-menu");
//     } else {
//       setStyle("humburger-menu-hidden");
//     }
//   };

//   return (
//     <>
//       <Router>
//         <nav>
//           <div className="NavBar">
//             <Link to="/">
//               <div className="brand">ARABIA</div>
//             </Link>
//             <div className="humburger-btn" type="button" onClick={toggleMenu}>
//               <div className="fa-bar"></div>
//               <div className="fa-bar"></div>
//               <div className="fa-bar"></div>
//             </div>
//           </div>
//           <div className={style}>
//             <div className="close-btn" type="button" onClick={toggleMenu}></div>
//             <ul>
//               <li>
//                 <Link to="/products">Products</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </Router>
//       {/* <style jsx>{`

//             `}</style> */}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "../Components/Navbar.css";
import { Link } from "react-router-dom";
import logo from './Images/logo1.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="rightSide">
        <img src={logo} alt="Arabia" />
      </div>
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/About">About</Link>
          <Link to="Contact">Contact</Link>
        </div>
        <i
          class="fa fa-bars"
          aria-hidden="true"
          onClick={() => setShowLinks(!showLinks)}
        ></i>
        {/* <button onClick={() => setShowLinks(!showLinks)}>Open</button> */}
      </div>
    </div>
  );
};

export default Navbar;
