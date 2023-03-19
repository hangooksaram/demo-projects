import { useMemo, useState } from "react";
let count = 0;
const UseMemoPractice = () => {
  const [users, setUsers] = useState([]);

  const countActiveUsers = () => {
    return users.filter((user) => user.state !== "active");
  };
  return <div></div>;
};

export default UseMemoPractice;
