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
    });

    test('atom input return type="text" "by default', () => {
        const { getByTestId } = render(<Input />);
        const getElement = getByTestId('input-test');

        expect(getElement.type).toBe('text');
    });

    test('atom input return type="password"', () => {
        const { getByTestId } = render(<Input type="password" /> );
        const getElement = getByTestId('input-test');

        expect(getElement.type).toBe('password');
    });

    test('atom input have an id', () => {
        const { getByTestId } = render(<Input type="password" id="label-id"/> );
        const getElement = getByTestId('input-test');

        expect(getElement.id).toBe('label-id');
    });
})
