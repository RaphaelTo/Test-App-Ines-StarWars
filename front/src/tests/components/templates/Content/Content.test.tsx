import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Content from '../../../../components/templates/Content/Content';

describe('template Content', () => {
   test('template Content exist', () => {
       const getContent = render(<Content/>);

       expect(getContent).toBeTruthy();
   });

   test('template Content have to return People', () => {
       const peoples: Array<object> = [{name: 'Raphael', height: '78kg', mass: '100'}];
       const { getAllByTestId } = render(<Content peoples={peoples}/>);

       const getPeoples = getAllByTestId('people-test').map(people => people.textContent);

       expect(getAllByTestId('people-test')[0] instanceof HTMLParagraphElement).toBeTruthy();
       expect(getPeoples).toEqual(['Raphael', '78kg', '100']);
   });

   test('template Content dont need to give props "peoples"', () => {
       const { getAllByTestId } = render(<Content />);

       const getPeoples = getAllByTestId('people-test').map(people => people.textContent);

       expect(getPeoples).toEqual(['Default name', 'Default height', 'Default mass']);
   });

   test('template Content return atom Button', () => {
       const { getByTestId } = render(<Content nameButton="Raphael le bg"/>);

       const getButton = getByTestId('button-test');

       expect(getButton instanceof HTMLButtonElement).toBeTruthy();
       expect(getButton).toHaveTextContent('Raphael le bg');
   });
});