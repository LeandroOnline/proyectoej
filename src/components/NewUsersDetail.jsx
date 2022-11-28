import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const NewUsersDetail = (props) => {
    let {user}=useParams();
    // console.log(useParams());
    console.log(props);
    // console.log(useSelector(state => state.myUsers[user]));
    return (
        <>
            <p>OKkk</p>
            {/* <p>{props.myUsers[0].name}</p> */}
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myUsers: state.myUsers,
    };
  };
  
  export default connect(mapStateToProps, null)(NewUsersDetail);