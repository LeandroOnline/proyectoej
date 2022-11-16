import React from "react";

class Users extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <>
           <p>{this.props.info}</p>
        </>
        )
    }
}

export default Users;