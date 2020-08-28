import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../../components/atoms/Input/Input';

describe('component input', () => {
    test('renders component input', () => {
        const inputComponent = render(<Input />);
        expect(inputComponent).toBeTruthy();
    });

})
