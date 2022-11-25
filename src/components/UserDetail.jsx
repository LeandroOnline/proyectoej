import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../redux/actions";

const UserDetail = (props) => {

    let {id}=useParams();

    useEffect(() => {
        props.getUserDetail(id)
    },[])
    console.log(props)
    return(
        <>
        <p>UserDetail aqui:</p>
        <p>{id}</p>
        <p>Nombre: {props.userDetail.name}</p>
        <p>Email: {props.userDetail.email}</p>
        <p>Username: {props.userDetail.username}</p>
        <p>Phone: {props.userDetail.phone}</p>
        </>
    )
}

//export default UserDetail;

const mapStateToProps = (state) => {
    return {
      userDetail: state.userDetail,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getUserDetail: (id) => dispatch(getUserDetail(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);