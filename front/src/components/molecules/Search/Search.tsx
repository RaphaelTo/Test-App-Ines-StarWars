import React from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

interface IPropsSearch {
    idLabel?: string,
    contentLabel?: string
}

const Search: React.FunctionComponent<IPropsSearch> = ({idLabel, contentLabel}) => {
    return (
        <>
            <Label htmlFor={idLabel} content={contentLabel}/>
            <Input />
        </>
    )
};

Search.propTypes = {
    idLabel: PropTypes.string,
    contentLabel: PropTypes.string
};

Search.defaultProps = {
    idLabel: 'valeur par defaut',
    contentLabel: 'valeur par defaut'
}

export default Search;