export const post = {
    description: 'Creates a friend request',
    operationId: 'createFriendRequest', 
    tags: [
        'Friend'
    ],
    parameters: [
        {
            name: 'username',
            in: 'query',
            schema: {
                type: 'string'
            },
            required: true
        }
    ],
    responses: {
      200: {
        description: 'Sends a friend request to a user',
        content: {
          'application/json': {
            schema: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean'
                    }
                }
            }
          }
        }
      }
    },
    security: [
        {
            cookieAuth: []
        },
        {
            bearerAuth: []
        }
    ]
  };