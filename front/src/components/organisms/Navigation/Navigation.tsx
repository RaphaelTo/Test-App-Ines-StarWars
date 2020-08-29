import React from "react";
import Search from "../../molecules/Search/Search";
import List from "../../atoms/List/List";
import PropTypes from "prop-types";

interface IPropsNavigation {
    searchInputType?: string
    searchInputId?: string
    searchLabelFor?: string
    searchLabelContent?: string
    listItems?: Array<string>
    [index: string]: any
}

const Navigation: React.FunctionComponent<IPropsNavigation> = ({searchInputId, searchInputType, searchLabelContent, searchLabelFor, propsOnClickList,listItems, ...props}) => {
    return (
        <>
            <Search {...props} idInput={searchInputId} typeInput={searchInputType} idLabel={searchLabelFor} contentLabel={searchLabelContent}/>
            <List propsOnClickList={propsOnClickList} items={listItems}/>
        </>
    )
};

Navigation.defaultProps = {
    searchInputId: '',
    searchInputType: 'text',
    searchLabelFor: 'valeur par defaut',
    searchLabelContent: 'valeur par defaut',
    listItems: ['Value 1', 'Value 2', 'Value 3']
};

Navigation.propTypes = {
    searchInputId: PropTypes.string,
    searchInputType: PropTypes.string,
    searchLabelContent: PropTypes.string,
    searchLabelFor: PropTypes.string,
    listItems: PropTypes.array
};

export default Navigation;