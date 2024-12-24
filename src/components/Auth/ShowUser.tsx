import React from "react";
import { useAppSelector } from "../../store/store";

interface ShowUserProps {}

const ShowUser: React.FC<ShowUserProps> = () => {
  const email = useAppSelector((state) => state.auth.email);
  const password = useAppSelector((state) => state.auth.password);

  return <div>
    <label>Email: </label>
    <p>{email}</p>
    <label>Password</label>
    <p>{password}</p>
  </div>;
};

export default ShowUser;
