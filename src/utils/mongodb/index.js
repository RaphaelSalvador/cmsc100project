import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import { createBlogModel } from './models/blog.js';
import { createUserModel } from './models/user.js';
import { createDiscardedTokenModel } from './models/discarded-token.js';
import { createFriendRequestModel } from './models/friend-request.js';
import { createFriendListModel } from './models/friend-list.js';

const models = {};

export const connect = async () => {
    const userPass = readFileSync('config/dev.json', 'utf8');

    const { mongodb: { username, password } } = JSON.parse(userPass);

    const config = readFileSync('src/config.json', 'utf8');

    const  { mongodb: { host, database } } = JSON.parse(config);
    
    await mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`);

    models.Blog = createBlogModel(mongoose);
    models.User = createUserModel(mongoose);
    models.DiscardedToken = createDiscardedTokenModel(mongoose);
    models.FriendRequest = createFriendRequestModel(mongoose);
    models.FriendList = createFriendListModel(mongoose);

    return mongoose;
};

export {
    mongoose,
    models
};