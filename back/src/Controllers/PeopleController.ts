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

    public static async updatePeople(ID: string, people: peopleType): Promise<ResponseSuccessType<any> | ResponseErrorType<any>> {
        try{
            const updatePeople = await People.findByIdAndUpdate(ID, people);
            return successResponse(updatePeople);
        }catch (e) {
            return errorResponse(e);
        }
    }

    public static async deletePeople(ID: string) {
        const removePeople = await People.findByIdAndRemove(ID);
        return successResponse(removePeople);
    }
}

export default PeopleController;