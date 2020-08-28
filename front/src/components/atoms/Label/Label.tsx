import React from "react";
import PropTypes from 'prop-types';

interface IPropsLabel {
    htmlFor?: string,
    content?: string
}

const Label: React.FunctionComponent<IPropsLabel> = ({htmlFor, content}) => {
    return <label htmlFor={htmlFor} data-testid="label-id">{content}</label>
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    content: PropTypes.string
};

Label.defaultProps = {
    htmlFor: 'valeur par defaut',
    content: 'valeur par defaut'
};

export default Label;