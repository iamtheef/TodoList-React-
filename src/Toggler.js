import React from "react";
import useInputState from "./Hooks/useInputState";

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState("");
  const [pass, updatePass, resetPass] = useInputState("");
  return (
    <div>
      <h1>Email is: {email}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Reset Email</button>

      <h1>Password is: {pass}</h1>
      <input type="text" value={pass} onChange={updatePass} />
      <button onClick={resetPass}>Reset Pass</button>
    </div>
  );
}
