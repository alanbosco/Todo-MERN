import { Document } from 'mongoose';
// import Category from "./category"

// export default interface Todo extends Document {
//     task: string;
//     done: boolean;
//     category: Category;
//     note: string;
// }

export default interface Todo extends Document {
    task: string;
    done: boolean;
}