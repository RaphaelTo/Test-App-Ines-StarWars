import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Navigation from '../../../../components/organisms/Navigation/Navigation';

describe('organisms Navigation', () => {
   test('organisms Navigation exist' , () => {
       const getNavigation = render(<Navigation />);

       expect(getNavigation).not.toBeNull();
   })
});