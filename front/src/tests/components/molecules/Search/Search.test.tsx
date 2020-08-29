import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Search from '../../../../components/molecules/Search/Search';

describe('molecules search', () => {
    test('molecules search exist', () => {
        const getSearch = render(<Search />);
        expect(getSearch).toBeTruthy();
    });

    test('molecules search return atom Label', async () => {
       const { getByTestId, debug } = render(<Search/>);
       const getLabel = getByTestId('label-id');

       expect(getLabel.htmlFor).toBe('valeur par defaut');
       expect(getLabel.textContent).toBe('valeur par defaut');
    });
})