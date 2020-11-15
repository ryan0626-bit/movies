import React, { useState } from "react";
import Auth from "./Auth";

function App() {
  const [email, setEmail] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  return !signedIn ? (
    <Auth setSignedIn={setSignedIn} email={email} setEmail={setEmail} />
  ) : (
    <div>Hello</div>
  );
}

export default App;
