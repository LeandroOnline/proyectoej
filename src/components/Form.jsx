import React from "react";
import { connect } from "react-redux";
import { createUser } from "../redux/actions";

const Form = (props) => {
    
    const [input, setInput] = React.useState(
        {
            name: "",
            username: "",
            email: "",
        }
    )

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setInput({...input, [property] : value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.createUser(input);
    }
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                    <input type="Text" name="name" value={input.name} onChange={changeHandler}></input>

                <label htmlFor="username">User Name: </label>
                    <input type="Text" name="username" value={input.username} onChange={changeHandler}></input>

                <label htmlFor="email">Email: </label>
                    <input type="Text" name="email" value={input.email} onChange={changeHandler}></input>

                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (input)=> dispatch(createUser(input)),
    }
}
export default connect(null, mapDispatchToProps)(Form)