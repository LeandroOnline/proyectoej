import React from "react";
import { Link } from "react-router-dom";

const User = ({ name, username, email, id }) => {
  return (
    <>
      <Link to={`/userdetail/${id}`}>
        <h3>{name}</h3> 
      </Link>
      <p>{username}</p>
      <p>{email}</p>
      <hr />
    </>
  );
};

export default User;
