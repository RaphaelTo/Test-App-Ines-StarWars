import React from "react";

interface IPropsInput {
    type?: string
}

const Input: React.FunctionComponent<IPropsInput> = ({type}) => ( <h1>Hello</h1>);

export default Input;