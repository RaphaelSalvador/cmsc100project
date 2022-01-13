import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 */

 export async function getFriendList (request) {
    const { user } = request;
    const { username } = user;
    
    const { FriendList } = models;

    const friendList = await FriendList
        .find({ username })
        .limit()
        .sort([['createDate', -1]]);

    return friendList;
  }