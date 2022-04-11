import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";
import HomepageComponent from "./components/home/HomeComponent";

import NavBarComponent from "./shared/components/NavBarComponent";
import AboutUsComponent from "./components/aboutUs/AboutUsComponent";
import LoginComponent from "./components/login/LoginComponent";
import SignUpComponent from "./components/signUp/SignUpComponent"

function App() {
  return (
    <>
      <NavBarComponent />
      <Grid>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/aboutUs" component={AboutUsComponent} />
        <Route path="/loginIn" component={LoginComponent} />
        <Route path="/signUp" component={SignUpComponent} />
      </Grid>
    </>
  );
}

export default App;
