import mongoose from 'mongoose';
import { readFileSync } from 'fs';

export const connect = async () => {
    const userPass = readFileSync('config/dev.json', 'utf8');

    const { mongodb: { username, password } } = JSON.parse(userPass);

    const config = readFileSync('src/config.json', 'utf8');

    const  { mongodb: { host, database } } = JSON.parse(config);
    
    await mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`);

    return mongoose;
};

export {
    mongoose 
};