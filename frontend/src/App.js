import React, { useState } from "react";
import Auth from "./Auth";
import Home from "./Home";

function App() {
  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  return !signedIn ? (
    <Auth email={email} setSignedIn={setSignedIn} setEmail={setEmail} />
  ) : (
    <Home email={email} />
  );
}

export default App;
