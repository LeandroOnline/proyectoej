import React from "react";
import Form from "./Form"

class Home extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <>
            <p> Bienvenidos </p>
            <h1> Estamos en el Home</h1>
            <Form />
        </>
        )
    }
}

export default Home;