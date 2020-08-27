import { peopleType } from "../Types/peopleType";
import People from "../Models/People";
import { IPeople } from "../Interfaces/IPeople";
import { successResponse } from "../responseJson";

class PeopleController {

    public static async createPeople(people: peopleType): Promise<any> {
        const createPeople: IPeople = await People.create(people);
        return successResponse<any>(createPeople);
    }
}

export default PeopleController;