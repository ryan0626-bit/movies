import axios from "axios";
import React, { useState } from "react";

export default function Auth(props) {
  const [password, setPassword] = useState("");
  const { setSignedIn, email, setEmail } = props;

  const signUp = async () => {
    let endpoint = "http://127.0.0.1:5001/dev/signup";
    let payload = {
      email: email,
      password: password,
    };

    let response = await axios.post(endpoint, payload);
    setSignedIn(response.data.success);
  };

  const signIn = async () => {
    let endpoint = "http://127.0.0.1:5001/dev/signin";
    let payload = {
      email: email,
      password: password,
    };

    let response = await axios.post(endpoint, payload);
    setSignedIn(response.data.success);
  };
  return (
    <div className="App">
      <input
        placeholder={"email"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder={"password"}
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
