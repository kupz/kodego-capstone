import { Button, TextField } from "@mui/material";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import avatar from "../assets/avatar.svg";
export default function Signup() {
  return (
    <div className="signup">
      <div className="left-section-signup">
        <h1>Take a step forward and manage your own money</h1>
        <img src={avatar} alt="avatar" style={{ maxWidth: "100%" }} />
        <h2>Get Ready for the future!</h2>
      </div>
      <div className="signup-right-form">
        <form className="signup-form">
          <h1>Create Account</h1>
          <TextField label="First name" variant="standard" color="success" />
          <TextField label="Middle name" variant="standard" color="success" />
          <TextField label="Last name" variant="standard" color="success" />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              color: "gray",
            }}
          >
            <h4>Birthdate</h4>
            <TextField variant="standard" color="success" type="Date" />
          </div>
          <TextField
            label="E-mail"
            variant="standard"
            color="success"
            type="email"
          />
          <TextField
            label="Password"
            variant="standard"
            color="success"
            type="password"
          />
          <TextField
            label="Confirm Password"
            variant="standard"
            color="success"
            type="password"
          />

          <Button variant="contained" color="success">
            CREATE ACCOUNT
          </Button>
          <p>
            Already have an account ? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
