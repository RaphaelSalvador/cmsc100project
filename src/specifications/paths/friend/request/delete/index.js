export const del = {
    description: 'Delete a friend request',
    operationId: 'deleteFriendRequest', 
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
        description: 'Delete a friend request',
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