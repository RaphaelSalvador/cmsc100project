import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 * @param {*} request
 * @param {*} reply
 * @returns {*}
 */

 export async function createFriendRequest (request, response) {
    const { query, user } = request;
    const { username } = query;
    const sender = user.username;

    const { User } = models;

    const friend = await User.findOne({ username });

    if(!friend) {
        return response.notFound('No User found');

    }
    const { FriendRequest } = models;

    const friendRequest = new FriendRequest({
        username,
        sender
    });
    
    await friendRequest.save();
    
    return {
        success: true,
        friendRequest
    }
  }