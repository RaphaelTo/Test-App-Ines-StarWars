import React from 'react';
import People from "../../atoms/People/People";

interface IPropsContent {
    peoples?: Array<object>
}

const Content: React.FunctionComponent<IPropsContent> = ({
                                                             peoples= [{
                                                                 name: 'Default name',
                                                                 height: 'Default height',
                                                                 mass: 'Default mass'
                                                             }] }) => {
    return <People peoples={peoples} />
};

export default Content;