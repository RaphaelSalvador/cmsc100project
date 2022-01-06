export const post = {
    description: 'Create a new user',
    operationId: 'createUser', 
    tags: [
        'User'
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string'
                        },
                        firstName: {
                            type: 'string'
                        },
                        lastName: {
                            type: 'string'
                        }, 
                        hobbies: {
                            type: 'string'
                        },
                        password: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    },
    responses: {
      200: {
        description: 'Creates a new user',
        content: {
          'application/json': {
            schema: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    firstName: {
                        type: 'string'
                    },
                    lastName: {
                        type: 'string'
                    },
                    hobbies: {
                        type: 'string'
                    }
                }
            }
          }
        }
      }
    }
  };