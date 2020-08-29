import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../../../components/templates/Header/Header';

describe('templates Header', () => {
   test('templates Header exist', () => {
      const getHeader = render(<Header/>);

      expect(getHeader).not.toBeNull();
   });

   test('Header render organisms Navigation', () => {
      const arrayList: Array<string> = ['Nom', 'Prenom', 'Age'];
      const { getByTestId, getAllByTestId } = render(<Header placeholder="Veuillez rentrer votre nom" listItems={arrayList} navigationSearchInputType="password" navigationSearchInputId="a" navigationSearchLabelFor="a" navigationSearchLabelContent="nom"/>);
      const getNavigationSearchInput = getByTestId('input-test');
      const getNavigationSearchLabel = getByTestId('label-id');
      const getNavigationList = getAllByTestId('li-items').map(item => item.textContent);

      expect(getNavigationSearchInput.placeholder).toBe('Veuillez rentrer votre nom');
      expect(getNavigationList).toEqual(arrayList);
      expect(getAllByTestId('li-items')).toBeTruthy();
      expect(getNavigationSearchInput.type).toBe('password');
      expect(getNavigationSearchInput.id).toBe('a');
      expect(getNavigationSearchInput instanceof HTMLInputElement).toBeTruthy();
      expect(getNavigationSearchLabel.htmlFor).toBe('a');
      expect(getNavigationSearchLabel.textContent).toBe('nom');
      expect(getNavigationSearchLabel instanceof HTMLLabelElement).toBeTruthy();
   });
});