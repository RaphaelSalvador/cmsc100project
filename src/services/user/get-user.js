import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 */

 export async function getUser (request) {
    const { user } = request;
    const { username } = user;
    
    const { User } = models;

    const userList = await User
        .find({ username })
        .limit()
        .sort([['createDate', -1]]);

    return userList;
  }