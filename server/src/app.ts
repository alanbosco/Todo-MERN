import express, { Request, Response, NextFunction } from "express";
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import MongoDatabase from "./services/database";
import controllers from "./controllers/todo";

const db = new MongoDatabase()

try {
    db.connect().then((res) => {
        console.log("Database connected successfully!")
    })
} catch (error) {
    console.log("Database connection failed", error)
}

const app: express.Application = express();
const debugLog: debug.IDebugger = debug('app');
app.use(express.json())
app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000, extended: true }));
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

app.get("/", (request: Request, response: Response, next: NextFunction) => {
    debugLog(`Routes configured for /`);
    return response.status(200).json({ version: process.env.npm_package_version });
});

app.get("/tasks", controllers.getTasks)

app.post("/task", controllers.createTask)



export { app };
