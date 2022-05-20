import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./LoginStyles.css";
import { styled } from "@mui/material/styles";
import agent from "../../proxy/userService";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Context from "../../stores/context"

import "./LoginStyles.css";

export default function LoginComponent(props) {
  const { globalState, globalDispatch } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  function handleClick() {
    const userDetail = {
      username: email,
      password: password,
    };
    agent.UserAPI.login(userDetail).then((response) => {
      sessionStorage.setItem("access_token", response["accessToken"]);
      sessionStorage.setItem("refresh_token", response["refreshToken"]);
      sessionStorage.setItem("username", email);
      globalDispatch({ type: "LOGIN" });
      history.push("/");
    });
  }

  return (
    <div className="LoginComponent" extends>
      <div style={{ padding: 180 ,color: "white"}}>
        <Grid
          container
          spacing={2}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <h1 style={{color: "#E87461", padding: 40}}>RedBack Login</h1>
          <TextField
            value={email}
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <button component={NavLink} to="/" onClick={() => handleClick()}>
            Submit
          </button>
          <div className="createprofile">
            {" "}
            <Link
              style={{
                color: "#ffff",
              }}
              to={"./signUp"}
            >
              {" "}
              Create a profile{" "}
            </Link>
          </div>

        </Grid>
      </div>
    </div>
  );
}
