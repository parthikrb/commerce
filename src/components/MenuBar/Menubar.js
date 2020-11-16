import React, { useEffect, useState } from "react";
import "./Menubar.css";

const Menubar = (props) => {
  const { menuItems } = props;
  const [menu, setMenu] = useState({});

  useEffect(() => {
    setMenu(menuItems);
  }, [menuItems]);

  return (
    <div className="menuBar">
      {Object.keys(menu).map((mainMenu) => {
        return (
          <div className="dropdown" key={mainMenu}>
            <button className="dropdown__mainMenu">{mainMenu}</button>
            <div className="dropdown__subMenu">
              {menu[mainMenu].map((subMenu) => {
                return (
                  <a href="/" key={subMenu}>
                    {subMenu}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menubar;
