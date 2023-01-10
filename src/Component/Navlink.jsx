import React from "react";
import {Text} from "@chakra-ui/react";
//  import { useLocation } from "react-router-dom";
 import  {Link} from "react-scroll"
function NavLink({ to, name, onClose, ...rest }) {

//   const isActive = location.pathname === to;

  return (
    <Link to={to} spy={true} smooth={true} offset={50} duration={2000} onClick={onClose}>
 
      <Text {...rest}  cursor={"pointer"}>{name}</Text>
 
    </Link>
  );
}

export default NavLink;