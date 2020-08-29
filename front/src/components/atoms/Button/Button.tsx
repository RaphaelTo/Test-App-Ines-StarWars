import React from 'react';

interface IPropsButton {
    name?: string
}


const Button: React.FunctionComponent<IPropsButton> = ({name = 'Valider'}) => {
    return <button data-testid="button-test">{name}</button>
};

export default Button;