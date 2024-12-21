import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "linear-gradient(90deg, #ff7e5f, #feb47b)" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blog Application
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/create">
          Create Post
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
