import bcrypt from 'bcrypt';
import { models } from '../../utils/mongodb/index.js';

/**
 * This is the home function
 *
 * @param {*} request
 * @param {*} reply
 * @returns {*}
 */

 export async function login (request, reply) {
    const { body } = request;
    const { email, password } = body;

    const { User } = models;

    const user = await User.findOne({ email }).exec();

    if (!user) {
        return reply.notFound();
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return reply.forbidden();
    }

    const token = this.app.jwt.sign({
        email
    });

    request.session.token = token;

    return {
        success: true,
        token
    };
  }