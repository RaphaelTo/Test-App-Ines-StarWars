import React from "react";
import PropTypes from 'prop-types';

interface IPropsInput {
    type?: string,
    id?: string,
    [index: string]: any
}

const Input: React.FunctionComponent<IPropsInput> = ({type, id, propsOnChangeInput, ...props}) => (
    <input type={type} id={id} {...props} data-testid='input-test' onChange={propsOnChangeInput}/>
);


Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string
};

Input.defaultProps = {
    type: 'text'
};

export default Input;