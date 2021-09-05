import { model, Schema, Model, Document } from 'mongoose';
import Todo from '../interfaces/todo';


const TaskSchema: Schema = new Schema({
  task: { type: String, required: true },
  done: { type: Boolean, required: true }
}, {
  timestamps: true
});

const Task: Model<Todo> = model('Todo', TaskSchema);


export { Task }