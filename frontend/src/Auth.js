import axios from "axios";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {API} from './config'

export default function Auth(props) {
  const [password, setPassword] = useState("");

  const { email, setEmail, setSignedIn } = props;

  const signUp = async () => {
    let endpoint = `${API}/signup`;
    let payload = {
      email,
      password: password,
    };

    let response = await axios.post(endpoint, payload);
    setSignedIn(response.data.success);
  };

  const signIn = async () => {
    let endpoint = `${API}/signin`;
    let payload = {
      email: email,
      password: password,
    };

    let response = await axios.post(endpoint, payload);
    setSignedIn(response.data.success);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "60vh" }}
    >
      <Grid item xs={3}>
        <div className="App">
          <TextField
            placeholder={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            placeholder={"password"}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={signUp}>Sign Up</Button>
          <Button onClick={signIn}>Sign In</Button>
        </div>
      </Grid>
    </Grid>
  );
}
