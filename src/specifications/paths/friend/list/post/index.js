export const post = {
    description: 'Creates a friend',
    operationId: 'createFriendList', 
    tags: [
        'Friend'
    ],
    parameters: [
        {
            name: 'sender',
            in: 'query',
            schema: {
                type: 'string'
            },
            required: true
        }
    ],
    responses: {
      200: {
        description: 'User becomes a friend',
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