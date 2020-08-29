import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Button from '../../../../components/atoms/Button/Button';

describe('atom Button', () => {
    test('atom Button exist', () => {
        const getButton = render(<Button/>);

        expect(getButton).not.toBeNull();
    });
});