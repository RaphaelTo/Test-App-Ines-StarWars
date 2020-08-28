import React from "react";

interface IPropsInput {
    type?: string
}

const Input: React.FunctionComponent<IPropsInput> = ({type}) => (
    <input type='text' data-testid='input-test'/>
);

export default Input;