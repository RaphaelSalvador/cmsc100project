import { home } from './base/home.js';
import { createBlog} from './blog/create-blog.js';
import { deleteBlog } from './blog/delete-blog.js';
import { getBlog } from './blog/get-blog.js';
import { getManyBlog} from './blog/get-many-blog.js';
import { updateBlog } from './blog/update-blog.js';
import { createUser } from './user/create-blog.js';
import { login } from './auth/login.js';
import { logout } from './auth/logout.js';
import { createFriendRequest } from './friend/create-friend-request.js';
import { getFriendRequests } from './friend/get-friend-request.js';
import { deleteFriendRequest } from './friend/delete-friend-request.js';
import { createFriendList } from './friend/create-friend-list.js';
import { getFriendList } from './friend/get-friend-list.js';

export class Service {
    constructor (app) {
        this.app = app
    }

    home = home
    createBlog = createBlog
    getManyBlog = getManyBlog
    getBlog = getBlog
    updateBlog = updateBlog
    deleteBlog = deleteBlog

    createUser = createUser

    login = login
    logout = logout

    createFriendRequest = createFriendRequest
    getFriendRequests = getFriendRequests
    deleteFriendRequest = deleteFriendRequest

    createFriendList = createFriendList
    getFriendList = getFriendList
}