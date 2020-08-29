import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import People from '../../../../components/atoms/People/People';

describe('atom People', () => {
   test('atom people exist', () => {
       const getPeople = render(<People />);

       expect(getPeople).toBeTruthy();
   })
});