import { ArrowLeft } from "./icons";
import "../css/custom.css";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useWindowSize from "../hooks/useWindowSize";
import menuItem from "./SideBarLinks";

export const SideBar = () => {
  const { width } = useWindowSize();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (width < 800) {
      //console.log(width);
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [width]);

  const setActiveClass = (pathname, itemPath) => {
    // console.log(pathname + itemPath);
    if (pathname === itemPath) {
      return "active";
    }
    return "link";
  };


  return (
    <>
      <div className="sidebar_Container">
        <div className={isOpen ? "sidebarOpen" : "sidebarClosed"}>
          <div className="top_section">
            <div style={{ display: isOpen ? "block" : "none" }} className="logo">
              <p>Logo</p>
            </div>
            <div className="bars">
              <div className="iconArrow" onClick={toggle}>
              <ArrowLeft />
              </div>
            </div>
          </div>

          <div>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={setActiveClass(location.pathname, item.path)}
              >
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>

          <div className="top_section">
          <div className="link_text">
            <div className="icon"></div>
            <div style={{ display: isOpen ? "block" : "none" }}className="link_text">
              Sign Out
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default SideBar;
