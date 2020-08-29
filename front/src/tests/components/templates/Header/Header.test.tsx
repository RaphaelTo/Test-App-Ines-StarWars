import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../../../components/templates/Header/Header';

describe('templates Header', () => {
   test('templates Header exist', () => {
      const getHeader = render(<Header/>);

      expect(getHeader).not.toBeNull();
   });
});