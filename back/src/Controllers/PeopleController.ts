import { peopleType } from "../Types/peopleType";
import People from "../Models/People";
import { IPeople } from "../Interfaces/IPeople";
import {errorResponse, successResponse} from "../responseJson";
import {ResponseSuccessType} from "../Types/ResponseSuccessType";
import {ResponseErrorType} from "../Types/ResponseErrorType";

class PeopleController {

    public static async createPeople(people: peopleType): Promise<ResponseSuccessType<any> | ResponseErrorType<any>> {
        try {
            const createPeople: IPeople = await People.create(people);
            return successResponse (createPeople);
        }catch (e) {
            return errorResponse(e);
        }
    }
}

export default PeopleController;