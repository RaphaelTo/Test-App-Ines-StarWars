import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../../components/atoms/Input/Input';

describe('component input', () => {
    test('renders atom input', () => {
        const inputComponent = render(<Input />);
        expect(inputComponent).toBeTruthy();
    });

    test('atom input return an input', () => {
        const { getByTestId } = render(<Input />);
        const getElement = getByTestId('input-test');

        expect(getElement instanceof HTMLInputElement).toBeTruthy();
    })
})
