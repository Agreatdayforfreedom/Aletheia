import { AppDataSource } from "./database";
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import aletheiaRouter from './router/aletheia';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/aletheia', aletheiaRouter);


async function main() {
    await AppDataSource.initialize();
}
main();

export default app;