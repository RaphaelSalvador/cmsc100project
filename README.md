# cmsc100project-backend
Simple Social Media App Backend

This project is designed to create a simple social media app wherein users are able to create account, make posts and edit them, and add friends.

This repository consists of the different functions that are implemented in the backend. It consists of the blog, user, friend, and auth functions. The blog functions are for the posts of the social media web app that enables users to create, get, edit, and delete posts. The create, edit, and delete posts have security features wherein only an authorized user is able to modify their own posts. The user function enables the creation of a user object. The friend functions enables the creation and deletion of friend requests. Additionally, users can also add friends to their friends list and view it. The auth functions are for security measures so that users are only able to access their own accounts and modify their own posts.

You may use this link to access the documentation: https://8080-aphaelalvador-cmsc100pro-gbdf72lwn3q.ws-us27.gitpod.io/docs/static/index.html

- Create User Test
    1. Click on POST /user
    2. Click on try it out
    3. In the request body, input the necessary information. An example input could be:
        "email": "testuser1@gmail.com",
        "firstName": "Test",
        "lastName": "User",
        "username": "testuser1",
        "hobbies": "gaming",
        "password": "testing123"

        After click on execute.
    4. The response should only return the username and hobbies
    5. Create another user with the following information:
        "email": "testuser2@gmail.com",
        "firstName": "Test",
        "lastName": "User",
        "username": "testuser2",
        "hobbies": "watching movies",
        "password": "testing123"

- Login Test
    1. Click on POST /auth/login
    2. Click on try it out
    3. In the request body, input the necessary information. An example input could be:
        "email": "testuser1@gmail.com",
        "password": "testing123"

        After click on execute.
    4. The response should only return the token and "success: true" 

- Create Blog Test (Note: A user must be logged in)
    1. Click on POST /blog
    2. Click on try it out
    3. In the request body, input the necessary information. An example input could be:
        "title": "An Amazing Test",
        "text": "This is an amazing test done by me."

        After click on execute.
    4. The response should return the following:
        * _id
        * title
        * text
        * username
        * createDate
        * updateDate
    
- Get Many Blogs Test
    1. Click on GET /blog
    2. Click on try it out
    3. Click on execute
    4. The response should return the three (3) most recently created posts.

- Get A Single Blog Test
    1. Click on GET /blog/{id}
    2. Click on try it out
    3. From the Get Many Blogs Test, copy the _id of any of the created blogs and paste it in the id box. Click execute.
    4. The response should return the blog data of a specific blog with the id.

- Update Blog Test (Note: A user must be logged in.)
    1. Click on PUT /blog/{id}
    2. Click on try it out
    3. From the Get Many Blogs Test, copy the _id of any of the created blogs and paste it in the id box.
    4. In the request body, input the necessary information. An example could be:
        "title": "Updated title",
        "text": "Updated text"

        After click execute.
    5. The response should return the blog data of a specific blog with the id assuming that the blog being accessed is created by the user that is logged in. Else, it should return an error indicating that the blog is not found.

- Delete Blog Test (Note: A user must be logged in.)
    1. Click on DELETE /blog/{id}
    2. Click on try it out
    3. From the Get Many Blogs Test, copy the _id of any of the created blogs and paste it in the id box. Click execute
    4. The response should return "success: true"

- Send Friend Request Test (Note: A user must be logged in.)
    1. Click on POST /friend/request
    2. Click on try it out
    3. Enter the username (testuser2). Click execute.
    4. The response should return "success: true"

- Get Friend Request Test (Note: A user must be logged in.)
    1. Click on GET /friend/request
    2. Click on try it out
    3. Click execute.
    4. The response should return all friend requests sent to the logged in user.

- Delete Friend Request Test (Note: A user must be logged in.)
    1. Click on DELETE /friend/request
    2. Click on try it out
    3. From the Get Friend Request Test, copy the name of the sender and paste it in the sender box. Click Execute.
    4. The response should return "success: true"

- Create A Friend Test (Note: A user must be logged in.)
    1. Click on POST /friend/list
    2. Click on try it out
    3. From the Get Friend Request Test, copy the name of the sender and paste it in the sender box. Click Execute.
    4. The response should return "success: true". Else, it should return an error "No User Found".

- Get Friend List Test (Note: A user must be logged in.)
    1. Click on GET /friend/list
    2. Click on try it out
    3. Click Execute.
    4. The response should return all friends of the user with the following information:
        * _id
        * username
        * sender
        * createDate

- Logout Test (Note: A user must be logged in.)
    1. Click on GET /auth/logout
    2. Click on try it out
    3. Click execute
    4. The response should return "success: true"

List of features:
1. Simple email/password registration
2. Users can add their first and last name, and a list of hobbies
3. Users can add friends
4. Users can send friend requests
5. Users can create and update posts as well as see the posts of other users 