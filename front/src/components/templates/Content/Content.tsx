import React from 'react';
import './Content.css';

import People from "../../atoms/People/People";
import Button from "../../atoms/Button/Button";

interface IPropsContent {
    peoples?: Array<object>
    nameButton?: string,
    onClickButton?: any
}

const Content: React.FunctionComponent<IPropsContent> = ({
                                                             peoples = [{
                                                                 name: 'Default name',
                                                                 height: 'Default height',
                                                                 mass: 'Default mass'
                                                             }],
                                                             nameButton = 'Valider',
                                                             onClickButton
                                                         }) => {
    return (
        <>
            <People peoples={peoples}/>
            <div className="content-button">
                <Button onClickButton={onClickButton} name={nameButton}/>
            </div>
        </>
    )
};

export default Content;