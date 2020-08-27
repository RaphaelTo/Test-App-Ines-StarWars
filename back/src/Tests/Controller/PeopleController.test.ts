import PeopleController from '../../Controllers/PeopleController';

describe('Controller PeopleController', () => {
    test('class exist', () => {
        const peopleController = new PeopleController();
        expect(peopleController).not.toBeNull();
    })
})