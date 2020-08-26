import mongoose from 'mongoose';
import {IPeople} from "../Interfaces/IPeople";

const PeopleSchema = new mongoose.Schema({
    name: String,
    birth_year: String,
    eye_color: String,
    gender: String,
    hair_color: String,
    height: String,
    mass: String,
    skin_color: String,
    homeworld: String,
    films:  [String],
    species: [String],
    starships: [String],
    vehicles: [String],
    url: String,
    created: String,
    edited: String
});

const People = mongoose.model<IPeople>('People', PeopleSchema);

export default People;