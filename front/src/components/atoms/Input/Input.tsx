import React from "react";
import PropTypes from 'prop-types';

interface IPropsInput {
    type?: string
}

const Input: React.FunctionComponent<IPropsInput> = ({type}) => (
    <input type={type} data-testid='input-test'/>
);


Input.propTypes = {
    type: PropTypes.string
};

Input.defaultProps = {
    type: 'text'
};

export default Input;