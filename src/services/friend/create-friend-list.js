import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 * @param {*} request
 * @param {*} reply
 * @returns {*}
 */

 export async function createFriendList (request, response) {
    const { query, user } = request;
    const { sender } = query;
    const username = user.username;

    const { FriendRequest } = models;

    const notFriend = await FriendRequest.findOne({ sender });

    if(!notFriend) {
        return response.notFound('No User found');
    }
    
    const { FriendList } = models;

    const friend = new FriendList({
        username,
        sender
    });
    
    await friend.save();
    
    return {
        success: true,
        friend
    }
  }