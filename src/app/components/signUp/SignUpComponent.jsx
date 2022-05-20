import "./SignUpStyles.css";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import agent from "../../proxy/userService";
export default function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telePhone, setPhNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // function to update state of user details with
  // value enter by user in form
  const handleFirstNChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePhNumberChange = (e) => {
    setPhNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password does not Match");
    } else {
      console.log(
        'A form was submitted with Name :"' +
          username +
          '" and Email :"' +
          email +
          '"' +
          telePhone
      );
    }
    e.preventDefault();
  };
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
  const [toggle, setToggle] = useState(true);
  async function onClick() {
    const object = {
      username: username,
      firstname: firstname,
      lastname: lastName,
      email: email,
      password: password,
      telephone: telePhone,
    };

    await agent.UserAPI.create(object).then(() => {
      setToggle(false);
    });
  }
  
  return (
    <div className="Signup" style={{ marginTop: "100",  padding: 100 }}>
    {  toggle ?
      <div>
        <h1 style={{color: "#E87461",  padding: 40}}>RedBack SignUp</h1>
        <div>
          <TextField
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            value={firstname}
            placeholder="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            value={lastName}
            placeholder="lastname"
            onChange={(e) => setLastName(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </div>
        <div>
          <TextField
            value={telePhone}
            placeholder="telephone"
            onChange={(e) => setPhNumber(e.target.value)}
          ></TextField>
        </div>
        <button

         onClick={() => onClick()}
        >
          Submit
        </button>
        
      </div>
      :<h1>User sucessfully created</h1>}
    </div>
  );
}
