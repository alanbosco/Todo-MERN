import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json()) 
app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000 }));

app.get("/", (request: Request, response: Response, next: NextFunction) => { 
    return response.status(200).json({ version: process.env.npm_package_version }); 
});
export { app };
