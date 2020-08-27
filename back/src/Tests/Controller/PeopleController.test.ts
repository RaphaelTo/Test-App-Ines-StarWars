import PeopleController from '../../Controllers/PeopleController';
import mongoose, {mongo} from 'mongoose';
import {mocked} from "ts-jest/utils";
import { peopleType} from "../../Types/peopleType";

jest.mock('mongoose');
const mockedMongoose = mocked(mongoose, true);

describe('Controller PeopleController', () => {
    test('class exist', () => {
        const peopleController: PeopleController = new PeopleController();
        expect(peopleController).not.toBeNull();
    });

    test('method createPeople exist', async () => {
        const mockValueToCreateUser: peopleType = {
            birth_year: "",
            created: "",
            edited: "",
            eye_color: "",
            gender: "",
            hair_color: "",
            height: "",
            homeworld: "",
            mass: "",
            name: "",
            skin_color: "",
            url: "",
            films:  ["a","a"],
            species: ["a","a"],
            starships: ["a","a"],
            vehicles: ["a","a"],
        };
        const returnMock: {} = {};

        expect.assertions(1);
        // @ts-ignore
        mockedMongoose.Model.find.mockResolvedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.createPeople(mockValueToCreateUser);

        expect(peopleController).not.toBeNull();
    })
});