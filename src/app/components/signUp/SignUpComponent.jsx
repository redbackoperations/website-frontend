
import "./SignUpStyles.css"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
export default function  SignUpComponent() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhNumber, setPhNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // function to update state of user details with
  // value enter by user in form
  const handleFirstNChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNChange = (e) => {
    setLastName(e.target.value);
  }
  const handlePhNumberChange = (e) => {
    setPhNumber(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password does not Match");
    } else {
      console.log('A form was submitted with Name :"' + FirstName +
      '" and Email :"' + email + '"' + PhNumber);
    }
    e.preventDefault();
  }
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });
  return (
    <div className="Signup">
      <header className="Signup-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> RedBack SignUp Form</h2>
          <div className="signUpInputs">
            <CssTextField 
            id="firstName" 
            sx={{ "& label": { color: "white" }}}
            label="First Name" 
            inputProps={{
              style: { color: "white" },
            }}
            variant="outlined"
            required
            fullWidth
             />
          </div>
          <div className="signUpInputs">
            <CssTextField 
            sx={{ "& label": { color: "white" }}}
            id="lastName" 
            inputProps={{
              style: { color: "white" },
            }}
            label="Last Name" 
            variant="outlined"
            required
            fullWidth
            />
          </div>
          <div className="signUpInputs">
            <CssTextField 
            sx={{ "& label": { color: "white" }}}
            id="PhNumber" 
            inputProps={{
              style: { color: "white" },
            }}
            label="Phone Number" 
            variant="outlined"
            type="number"
            required
            fullWidth
             />
          </div>
          <div className="signUpInputs">
            <CssTextField 
            id="email" 
            inputProps={{
              style: { color: "white" },
            }}
            sx={{ "& label": { color: "white" }}}
            label="Email" 
            variant="outlined"
            type="email"
            required
            fullWidth
            />
          </div>
          <div className="signUpInputs">
            <CssTextField
            sx={{ "& label": { color: "white" }}}
            id="password"
            inputProps={{
              style: { color: "white" },
            }}
            label="Password"
            type="password"
            required
            fullWidth
           />
          </div>
          <div className="signUpInputs">
            <CssTextField
            sx={{ "& label": { color: "white" }}}
            id="confPassword"
            inputProps={{
              style: { color: "white" },
            }}
            label="Confirm Password"
            type="password"
            required
            fullWidth
            autoComplete="current-password"
            />
          </div>
          <div className="signUpInputs">
            <Button
                style={{
                  borderRadius: 25,
                  backgroundColor: "#e87461",
                  color: "#FFFF",
                  padding: "10px 20px",
                  fontSize: "15px"
                }} 
              type="submit"
              variant="contained"
            >
              Create profile</Button>
          </div>
        </form>
      </header>
    </div>
  );
}



