import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import List from '../../../../components/atoms/List/List';

describe('atom List', () => {
   test('atom List exist', () => {
       const getList = render(<List />);

       expect(getList).toBeTruthy();
   })
});