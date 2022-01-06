import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 * 
 * @param {*} request
 * @param {*} reply
 * @returns {*}
 */
export async function logout (request, reply) {
    const { token, user } = request;
    const { DiscardedToken } = models;

    const { email } = user;
    const data = new DiscardedToken({
        email,
        token
    });

    await data.save();

    request.destroySession(() => {
        reply.send({
            success: true
        });
    });
}