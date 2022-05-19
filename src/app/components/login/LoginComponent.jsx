import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom"
import "./LoginStyles.css"
import { alpha, styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
}

  function handleSubmit(event) {
    event.preventDefault();
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
  <div className="LoginComponent">
    <div style={{ padding: 30 , color : 'white'}}>
    <Grid
      container
      spacing={1}
      direction={'column'}
      justify={'center'}
      alignItems={'center'}>
      <h1>RedBack Login</h1>
      <Form onSubmit={handleSubmit} >
      
      <Grid style={{ padding: 20 }} item xs={12} >
        <Form.Group size="lg" controlId="email">
          <CssTextField label="Email"
            type="email"
            sx={{ "& label": { color: "white" } }}
            inputProps={{
              style: { color: "white" },
            }}
            variant="outlined" 
            style={{"borderColor":"#62656A"}}
            fullWidth
            required
            >
          </CssTextField>
        </Form.Group>
        </Grid>

        <Grid style={{ padding: 20 }} item xs={12}>
        <Form.Group size="lg" controlId="password">
          <CssTextField 
            label="Password"
            sx={{ "& label": { color: "white" }}}
            inputProps={{
              style: { color: "white" },
            }}
            style={{"borderColor":"#62656A"}}
            variant="outlined" 
            type="password"
            fullWidth
            required
          ></CssTextField>
        </Form.Group>
        </Grid>
        <Grid style={{ padding: 20 }} item xs={12}>
        <Button 
            style={{
              borderRadius: 25,
              backgroundColor: "#e87461",
              color: "#FFFF",
              padding: "10px 20px",
              fontSize: "15px"
            }} 
          fullWidth type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <div className="createprofile"> <Link style={{
              color: "#FFFF",
            }} 
            to={"./signUp"}>  Create a profile </Link>
        </div>
       </Grid>
      </Form>
    </Grid>
    </div>
  </div>
);
}
