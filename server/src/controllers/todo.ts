import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose"
import { Task } from "../models/task"

const getTasks = (request: Request, response: Response, next: NextFunction) => {
    Task.find().exec().then((tasks: any) => {
        return response.status(200).json({
            task: tasks
        })
    })
}

const createTask = async (request: Request, response: Response, next: NextFunction) => {
    const { task } = request.body
    const newTask = new Task({
        _id: new mongoose.Types.ObjectId(),
        task,
        done: false
    })
    try {
        const result = await newTask.save();
        return response.status(201).json({
            task: result
        });
    } catch (error: any) {
        return response.status(500).json({
            message: error.message,
            error
        });
    }
}

export default { getTasks, createTask }