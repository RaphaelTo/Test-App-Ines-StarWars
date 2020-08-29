import React from "react";
import './List.css';

interface IPropsList {
    items?: Array<string>
    [index: string]: any
}

const List: React.FunctionComponent<IPropsList> = ({items = ['Value 1', 'Value 2', 'Value 3'], propsOnClickList}) => {
    return (
      <>
          <div className='header-organisms-list'>
              <ul>
                  {items?.map((item: string, key: number) => (
                      <li onClick={propsOnClickList} key={key} data-testid="li-items">{item}</li>
                  ))}
              </ul>
          </div>
      </>
    );
};

export default List;