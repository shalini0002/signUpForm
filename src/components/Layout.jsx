import React, {useState} from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

function Layout({ children }) {
  
  return (
    <>
   
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default Layout;
