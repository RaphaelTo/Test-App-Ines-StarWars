import React from 'react';
import People from "../../atoms/People/People";
import Button from "../../atoms/Button/Button";

interface IPropsContent {
    peoples?: Array<object>
    nameButton ?: string
}

const Content: React.FunctionComponent<IPropsContent> = ({
                                                             peoples= [{
                                                                 name: 'Default name',
                                                                 height: 'Default height',
                                                                 mass: 'Default mass'
                                                             }], nameButton= 'Valider' }) => {
    return (
        <>
            <People peoples={peoples} />
            <Button name={nameButton} />
        </>
    )
};

export default Content;