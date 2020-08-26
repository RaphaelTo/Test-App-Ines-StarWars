import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from "./Provider/Connection";
import { log } from './Provider/logDB';
dotenv.config();

const connectToDB: Connection = new Connection(log);
connectToDB.atMongoDB();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(process.env.PORT, () => console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`));