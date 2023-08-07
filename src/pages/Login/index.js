import { Button, TextField } from "@mui/material";

export default function Login() {
  return (
    <div className="login">
      <form>
        <TextField variant="outlined" label="Email" type="email" />
        <TextField variant="outlined" label="Password" type="password" />
        <Button variant="outlined">Sign in</Button>
      </form>
    </div>
  );
}
