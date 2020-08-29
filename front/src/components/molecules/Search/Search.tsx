import React from "react";
import './Search.css';
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

interface IPropsSearch {
    idLabel?: string,
    contentLabel?: string,
    idInput?: string,
    typeInput?: string,
    [index:string]: any
}

const Search: React.FunctionComponent<IPropsSearch> = ({
                                                           idLabel = 'valeur par defaut',
                                                           contentLabel= 'valeur par defaut',
                                                           idInput,
                                                           typeInput = 'text' ,
                                                           ...props
}) => {
    return (
        <>
            <div className="header-navigation-search">
                <Label htmlFor={idLabel} content={contentLabel}/>
                <Input type={typeInput} id={idInput} {...props}/>
            </div>
        </>
    )
};

export default Search;