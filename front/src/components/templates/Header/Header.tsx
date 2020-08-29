import React from "react";
import Navigation from "../../organisms/Navigation/Navigation";

interface IPropsNavigation {
    listItems?: Array<string>
    navigationSearchInputType?: string
    navigationSearchInputId?: string
    navigationSearchLabelFor?: string
    navigationSearchLabelContent?: string
    [index: string]: any
};

const Header: React.FunctionComponent<IPropsNavigation> = ({
    listItems= ['value 1', 'value 2', 'value 3'],
    navigationSearchInputId= '',
    navigationSearchInputType= 'text',
    navigationSearchLabelContent= 'valeur par defaut',
    navigationSearchLabelFor= 'valeur par defaut',
    propsOnClickList,
    ...props
                                                           }) => {
    return <Navigation
        listItems={listItems}
        searchInputId={navigationSearchInputId}
        searchInputType={navigationSearchInputType}
        searchLabelContent={navigationSearchLabelContent}
        searchLabelFor={navigationSearchLabelFor}
        propsOnClickList={propsOnClickList}
        {...props}
    />
};

export default Header;