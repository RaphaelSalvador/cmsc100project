import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 */

 export async function deleteFriendRequest (request, reply) {
    const { query } = request;
    const { sender } = query;
    
    const { FriendRequest } = models;

    const notFriend = await FriendRequest.deleteOne({ sender });

    if (notFriend.deletedCount === 0 ) {
      return reply.notFound();
    }

    return {
        success: true
    };
  }