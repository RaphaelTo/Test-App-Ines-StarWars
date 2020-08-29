import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Navigation from '../../../../components/organisms/Navigation/Navigation';

describe('organisms Navigation', () => {
   test('organisms Navigation exist' , () => {
       const getNavigation = render(<Navigation />);

       expect(getNavigation).not.toBeNull();
   });

   test('organism Navigation return  molecule Search', () => {
       const { getByTestId } = render(<Navigation/>);
       const getSearchInput = getByTestId('input-test');
       const getSearchLabel = getByTestId('label-id');

       expect(getSearchInput.type).toBe('text');
       expect(getSearchInput.id).toBe('');
       expect(getSearchInput instanceof HTMLInputElement).toBeTruthy();
       expect(getSearchLabel.htmlFor).toBe('valeur par defaut');
       expect(getSearchLabel.textContent).toBe('valeur par defaut');
       expect(getSearchLabel instanceof HTMLLabelElement).toBeTruthy();
   })
});