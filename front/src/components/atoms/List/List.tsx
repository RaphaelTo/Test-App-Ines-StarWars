import React from "react";
import PropTypes from 'prop-types';

interface IPropsList {
  items?: Array<string>
}

const List: React.FunctionComponent<IPropsList> = ({items}) => {
    return (
      <>
          <ul>
              {items?.map((item: string, key: number) => (
                  <li key={key} data-testid="li-items">{item}</li>
              ))}
          </ul>
      </>
    );
};

List.propTypes = {
    items: PropTypes.array
};

List.defaultProps = {
    items: ['Value 1', 'Value 2', 'Value 3']
};

export default List;