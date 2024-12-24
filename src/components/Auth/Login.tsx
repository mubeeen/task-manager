import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { login } from "../../store/features/authSlice";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(login({ email, password }));
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default behavior
     // Dispatch the login action
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Use setState to update email
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Use setState to update password
        />
        <button type="submit">Submit</button>
        <br />
      </form>
    </div>
  );
};

export default Login;
