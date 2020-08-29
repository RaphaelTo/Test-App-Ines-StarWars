import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Content from '../../../../components/templates/Content/Content';

describe('template Content', () => {
   test('template Content exist', () => {
       const getContent = render(<Content/>);

       expect(getContent).toBeTruthy();
   });
});