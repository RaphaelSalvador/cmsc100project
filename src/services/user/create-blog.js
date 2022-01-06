import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 * @param {*} request
 * @param {*} reply
 * @returns {*}
 */

 export async function createUser (request, reply) {
    const { body } = request;
    const { email, firstName, lastName, hobbies, password } = body;

    const { User } = models;

    const user = new User({
      email,
      firstName,
      lastName,
      hobbies,
      password
    });

    await user.save();

    return user;
  }