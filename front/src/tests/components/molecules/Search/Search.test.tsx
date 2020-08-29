import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Search from '../../../../components/molecules/Search/Search';

describe('molecules search', () => {
    test('molecules search exist', () => {
        const getSearch = render(<Search />);
        expect(getSearch).toBeTruthy();
    });

    test('molecules search return atom Label', () => {
       const { getByTestId, debug } = render(<Search/>);
       const getLabel = getByTestId('label-id');

       expect(getLabel.htmlFor).toBe('valeur par defaut');
       expect(getLabel.textContent).toBe('valeur par defaut');
    });

    test('molecules search accept props for atom label', () => {
       const { getByTestId, debug } = render(<Search idLabel="idL" contentLabel="Nom"/>);
       const getLabel = getByTestId('label-id');

       expect(getLabel.htmlFor).toBe('idL');
       expect(getLabel.textContent).toBe('Nom');
    });

    test('molecules search return atom Input', () => {
        const { getByTestId } =render(<Search />);
        const getInput = getByTestId('input-test');

        expect(getInput.type).toBe('text');
        expect(getInput.id).toBe('');
        expect(getInput instanceof HTMLInputElement).toBeTruthy();
    });

    test('molecules search accept props for atom Input', () => {
       const { getByTestId } = render(<Search typeInput="password" idInput="idI"/>);
       const getInput = getByTestId('input-test');

       expect(getInput.type).toBe('password');
       expect(getInput.id).toBe('idI');
    });

    test('molecules search render Label atom and Input atom', () => {
        const { getByTestId } = render(<Search typeInput="text" idInput="idL" idLabel="idL" contentLabel="Nom" placeholder="Veuillez renseignez votre nom"/>);

        const getInput = getByTestId('input-test');
        const getLabel = getByTestId('label-id');

        expect(getInput instanceof HTMLInputElement).toBeTruthy();
        expect(getInput.type).toBe('text');
        expect(getInput.id).toBe('idL');
        expect(getInput.placeholder).toBe('Veuillez renseignez votre nom');
        expect(getLabel instanceof HTMLLabelElement).toBeTruthy();
        expect(getLabel.htmlFor).toBe('idL');
        expect(getLabel.textContent).toBe('Nom');
    });
})