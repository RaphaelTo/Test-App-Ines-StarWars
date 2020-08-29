import React from "react";

interface IPropsInput {
    type?: string,
    id?: string,
    [index: string]: any
}

const Input: React.FunctionComponent<IPropsInput> = ({type = 'text', id, propsOnChangeInput, ...props}) => (
    <input type={type} id={id} {...props} data-testid='input-test' onChange={propsOnChangeInput}/>
);

export default Input;