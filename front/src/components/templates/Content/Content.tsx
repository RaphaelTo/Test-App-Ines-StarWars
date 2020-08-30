import React from 'react';
import './Content.css';

import People from "../../atoms/People/People";
import Button from "../../atoms/Button/Button";

interface IPropsContent {
    peoples?: Array<object>
    nameButton?: string,
    activateButton?: boolean
    onClickButton?: any
}

const Content: React.FunctionComponent<IPropsContent> = ({
                                                             peoples = [{
                                                                 name: 'Default name',
                                                                 height: 'Default height',
                                                                 mass: 'Default mass'
                                                             }],
                                                             nameButton = 'Valider',
                                                             activateButton,
                                                             onClickButton
                                                         }) => {
    return (
        <>
            <People peoples={peoples}/>
            <div className="content-button" data-testid="content-button">
                {activateButton ? <Button onClickButton={onClickButton} name={nameButton}/> : 'Plus rien à charger'}
            </div>
        </>
    )
};

export default Content;