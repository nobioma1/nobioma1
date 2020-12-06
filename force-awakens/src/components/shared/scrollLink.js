import React from "react";
import { Link } from "react-scroll";

const ScrollLink = ({ to, children, className, activeClass, clickHandler }) => {
  return (
    <Link
      to={to}
      className={className}
      activeClass={activeClass}
      onClick={clickHandler}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      style={{
        cursor: "pointer",
      }}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
