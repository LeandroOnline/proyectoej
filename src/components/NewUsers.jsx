import React from "react";
import { Link } from "react-router-dom";

const NewUsers = (props) => {
  
  return (
    <>
      <Link to={`/newusersdetail/${props.name}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>{props.email}</p>
      <p>{props.username}</p>
      <hr />
    </>
  );
};
export default NewUsers;
