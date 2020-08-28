import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import List from '../../../../components/atoms/List/List';

describe('atom List', () => {
   test('atom List exist', () => {
       const getList = render(<List />);

       expect(getList).toBeTruthy();
   });

   test('atom List get an props items type Array and return in li', () => {
       const items: Array<string> = ['Name', 'Email', 'Password'];
       const { getAllByTestId } = render(<List items={items}/>);

       const getAllItems = getAllByTestId('li-items').map(item => item.textContent);

       expect(getAllItems).toEqual(items);
   });

   test('atom List have default value for props value', () => {
       const { getAllByTestId } = render(<List />);

       const getAllItems = getAllByTestId('li-items').map(item => item.textContent);

       expect(getAllItems).toEqual(['Value 1', 'Value 2', 'Value 3']);
   });
});