import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Label from '../../../../components/atoms/Label/Label';

describe('component input', () => {
    test('renders atom label', () => {
        const inputComponent = render(<Label />);
        expect(inputComponent).toBeTruthy();
    });
})
