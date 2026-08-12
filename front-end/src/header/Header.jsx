import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [active,setActive]=useState("")
  const location =useLocation()
  const handleActive=()=>{
    setActive(active=="active" ? "" : "active")
  }

  useEffect(()=>{
    setActive("")
  },[location])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={`header`}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className="logo"
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            TIM<span>O</span>RA
          </Typography>
          {active=="active" ? "" :(
            <div className="mobile" onClick={handleActive}><DehazeIcon sx={{
              color:"white"
            }}
            fontSize="medium" /></div>
          )}
          <div className={`my_links ${active}`}>
            {active=="active" ? (
               <div className="mobile" onClick={handleActive}><CloseIcon fontSize="medium"/></div>
            ) :""}
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
            <Link to="/login">
              <AccountCircleIcon />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
