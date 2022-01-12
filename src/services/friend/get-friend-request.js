import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 */

 export async function getFriendRequests (request) {
    const { user } = request;
    const { username } = user;
    
    const { FriendRequest } = models;

    const friendRequests = await FriendRequest
        .find({ username })
        .limit()
        .sort([['createDate', -1]]);

    return friendRequests;
  }