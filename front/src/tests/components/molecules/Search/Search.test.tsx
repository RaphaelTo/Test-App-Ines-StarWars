import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Search from '../../../../components/molecules/Search/Search';

describe('molecules search', () => {
    test('molecules search exist', () => {
        const getSearch = render(<Search />);
        expect(getSearch).toBeTruthy();
    })
})