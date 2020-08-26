import * as mongoose from "mongoose";

export interface IPeople extends mongoose.Document {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    homeworld: string;
    [index: number]: string;
    url: string;
    created: string;
    edited: string;
}