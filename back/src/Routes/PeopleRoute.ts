import express from 'express';
import PeopleController from "../Controllers/PeopleController";
import People from "../Models/People";
import {FilterQueryType} from "../Types/FilterQueryType";
import {LimiteQueryType} from "../Types/LimiteQueryType";


export const peopleRoute: express.Router = express.Router();

peopleRoute
    .get('/all', async (req: any, res: any) => {
        const filter: FilterQueryType= {
            name: new RegExp(req.query.name),
            gender: new RegExp(req.query.gender),
            homeworld: new RegExp(req.query.world)
        };
        const limit: LimiteQueryType = {
            limit: 5,
            skip: parseInt(req.query.skip)
        };

        res.json(await PeopleController.getAllPeople(filter, limit));
    })

    .get('/byId/:id', async (req: any, res: any) => {
        res.json(await PeopleController.getPeopleByID(req.params.id));
    })

    .post('/',  async (req , res) =>  {
        res.json(await PeopleController.createPeople(req.body));
    })

    .delete('/byId/:id', async (req:any, res: any) => {
        res.json(await PeopleController.deletePeople(req.params.id))
    })

    .put('/byId/:id', async(req: any, res: any) => {
        res.json(await PeopleController.updatePeople(req.params.id, req.body));
    })