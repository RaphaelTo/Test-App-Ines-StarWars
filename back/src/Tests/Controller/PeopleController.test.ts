import { mocked } from "ts-jest/dist/util/testing";

import People from "../../Models/People";
import PeopleController from '../../Controllers/PeopleController';
import { peopleType } from "../../Types/peopleType";

jest.mock('../../Models/People');

const mockedPeople = mocked(People, true);

describe('Controller PeopleController', () => {

    beforeEach(() => {
        mockedPeople.mockReset();
    });

    test('class exist', () => {
        const peopleController: PeopleController = new PeopleController();
        expect(peopleController).not.toBeNull();
    });

    test('method createPeople exist', async () => {
        const mockValueToCreatePeople: peopleType = {
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
        mockedPeople.create.mockResolvedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.createPeople(mockValueToCreatePeople);

        expect(peopleController).not.toBeNull();
    });

    test('method createPeople create a people', async () => {
        const mockValueToCreatePeople: peopleType = {
            birth_year: "2018",
            created: "today",
            edited: "yesterday",
            eye_color: "blue",
            gender: "male",
            hair_color: "short",
            height: "58kg",
            homeworld: "earth",
            mass: "idk",
            name: "Raphael",
            skin_color: "blue",
            url: "portfolio-raphael-torres.fr",
            films:  ["a","a"],
            species: ["a","a"],
            starships: ["a","a"],
            vehicles: ["a","a"],
        };
        const returnMock: {_id: string, name: string} = {
            _id: 'a',
            name: 'Raphael'
        };

        expect.assertions(3);
        // @ts-ignore
        mockedPeople.create.mockResolvedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.createPeople(mockValueToCreatePeople);

        expect(mockedPeople.create).toHaveBeenCalled();
        expect(peopleController).toEqual(peopleController);
        expect(typeof peopleController).toBe('object');
    });

    test('method createPeople throw an Error if promise is rejected', async () => {
        const mockValueToCreatePeople: peopleType = {
            birth_year: "2018",
            created: "today",
            edited: "yesterday",
            eye_color: "blue",
            gender: "male",
            hair_color: "short",
            height: "58kg",
            homeworld: "earth",
            mass: "idk",
            name: "Raphael",
            skin_color: "blue",
            url: "portfolio-raphael-torres.fr",
            films:  ["a","a"],
            species: ["a","a"],
            starships: ["a","a"],
            vehicles: ["a","a"],
        };
        const returnMock: Error = new Error('ERROR');

        expect.assertions(1);
        // @ts-ignore
        mockedPeople.create.mockRejectedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.createPeople(mockValueToCreatePeople);

        //@ts-ignore
        const getErrorMessage = peopleController.messageError;

        expect(getErrorMessage.message).toBe("ERROR")
    });

    test('method updatePeople exist', async () => {
        const mockValueToUpdatePeople: peopleType = {
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
        const paramID: string = "zae";
        const returnMock: any = {};

        expect.assertions(1);

        mockedPeople.findByIdAndUpdate.mockResolvedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.updatePeople(paramID,mockValueToUpdatePeople);

        expect(peopleController).not.toBeNull();
    });

    test('method updatePeople update a people', async () => {
        const mockValueToUpdatePeople: peopleType = {
            birth_year: "",
            created: "",
            edited: "",
            eye_color: "",
            gender: "",
            hair_color: "",
            height: "",
            homeworld: "",
            mass: "",
            name: "Raphael",
            skin_color: "",
            url: "",
            films:  ["a","a"],
            species: ["a","a"],
            starships: ["a","a"],
            vehicles: ["a","a"],
        };
        const paramID: string = "zae";
        const returnMock: {_id: string, name: string } = {_id: 'zae', name: 'Raphael'};

        expect.assertions(3);
        // @ts-ignore
        mockedPeople.findByIdAndUpdate.mockResolvedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.updatePeople(paramID, mockValueToUpdatePeople);
        //@ts-ignore
        const resultUpdate = peopleController.result;


        expect(mockedPeople.findByIdAndUpdate).toHaveBeenCalled();
        expect(typeof peopleController).toBe('object');
        expect(resultUpdate).toEqual(returnMock);
    } );

    test('method updatePeople throw an error if reject', async () => {
        const mockValueToUpdatePeople: peopleType = {
            birth_year: "",
            created: "",
            edited: "",
            eye_color: "",
            gender: "",
            hair_color: "",
            height: "",
            homeworld: "",
            mass: "",
            name: "Raphael",
            skin_color: "",
            url: "",
            films:  ["a","a"],
            species: ["a","a"],
            starships: ["a","a"],
            vehicles: ["a","a"],
        };
        const paramID: string = "zae";
        const returnMock: Error = new Error('Error');

        expect.assertions(2);
        // @ts-ignore
        mockedPeople.findByIdAndUpdate.mockRejectedValue(returnMock);
        const peopleController: PeopleController = await PeopleController.updatePeople(paramID, mockValueToUpdatePeople);
        //@ts-ignore
        const errorUpdate = peopleController.messageError;

        expect(mockedPeople.findByIdAndUpdate).toHaveBeenCalled();
        expect(errorUpdate.message).toBe('Error');
    })

});