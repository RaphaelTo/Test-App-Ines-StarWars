import React from "react";
import PropTypes from 'prop-types';

interface IPropsInput {
    type?: string,
    id?: string
}

const Input: React.FunctionComponent<IPropsInput> = ({type, id}) => (
    <input type={type} id={id} data-testid='input-test'/>
);


Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string
};

Input.defaultProps = {
    type: 'text'
};

export default Input;