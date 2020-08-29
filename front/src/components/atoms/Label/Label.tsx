import React from "react";

interface IPropsLabel {
    htmlFor?: string,
    content?: string
}

const Label: React.FunctionComponent<IPropsLabel> = ({htmlFor = 'valeur par defaut', content= 'valeur par defaut'}) => {
    return <label htmlFor={htmlFor} data-testid="label-id">{content}</label>
};

export default Label;