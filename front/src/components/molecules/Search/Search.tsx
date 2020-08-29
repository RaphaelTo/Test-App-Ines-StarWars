import React from "react";
import PropTypes from "prop-types";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

interface IPropsSearch {
    idLabel?: string,
    contentLabel?: string,
    idInput?: string,
    typeInput?: string,
    [index:string]: any
}

const Search: React.FunctionComponent<IPropsSearch> = ({idLabel, contentLabel, idInput, typeInput, ...props}) => {
    return (
        <>
            <Label htmlFor={idLabel} content={contentLabel}/>
            <Input type={typeInput} id={idInput} {...props}/>
        </>
    )
};

Search.propTypes = {
    idLabel: PropTypes.string,
    contentLabel: PropTypes.string,
    idInput: PropTypes.string,
    typeInput: PropTypes.string
};

Search.defaultProps = {
    idLabel: 'valeur par defaut',
    contentLabel: 'valeur par defaut',
    typeInput: 'text'
};

export default Search;