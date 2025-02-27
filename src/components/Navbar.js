import React from "react";
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';


import { Link } from "react-router-dom";
//import "./Navbar.css"; // Import CSS for styling

//  prebuilt navbar given by amplify
const Navbar = () => {
  return (
   
         <View width="4rem">
           <Menu>
             <MenuItem>Option 1</MenuItem>
             <MenuItem>Option 2</MenuItem>
             <MenuItem>Option 3</MenuItem>
           </Menu>
         </View>
       );
     };
export default Navbar;
