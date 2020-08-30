import React from "react";
import Search from "../../molecules/Search/Search";
import List from "../../atoms/List/List";

interface IPropsNavigation {
  searchInputType?: string;
  searchInputId?: string;
  searchLabelFor?: string;
  searchLabelContent?: string;
  listItems?: Array<string>;
  onChangeInput?: any;
  [index: string]: any;
}

const Navigation: React.FunctionComponent<IPropsNavigation> = ({
  searchInputId = "",
  searchInputType = "text",
  searchLabelContent = "valeur par defaut",
  searchLabelFor = "valeur par defaut",
  propsOnClickList,
  onChangeInput,
  listItems = ["Value 1", "Value 2", "Value 3"],
  ...props
}) => {
  return (
    <>
      <Search
        onChangeInput={onChangeInput}
        {...props}
        idInput={searchInputId}
        typeInput={searchInputType}
        idLabel={searchLabelFor}
        contentLabel={searchLabelContent}
      />
      <List propsOnClickList={propsOnClickList} items={listItems} />
    </>
  );
};

export default Navigation;
