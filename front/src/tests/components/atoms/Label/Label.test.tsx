import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Label from '../../../../components/atoms/Label/Label';

describe('component input', () => {
    test('renders atom label', () => {
        const inputComponent = render(<Label />);
        expect(inputComponent).toBeTruthy();
    });

    test('atom label is label tag', () => {
        const { getByTestId } = render(<Label />);

        const getElement = getByTestId('label-id');

        expect(getElement instanceof HTMLLabelElement).toBeTruthy();
    })

})
