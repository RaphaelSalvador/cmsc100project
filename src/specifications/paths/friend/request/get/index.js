export const get = {
    description: 'Get all friend requests',
    operationId: 'getFriendRequests', 
    tags: [
        'Friend'
    ],
    parameters: [
        {
            name: 'limit',
            in: 'query',
            schema: {
              type: 'number'
            }
        }
    ],
    responses: {
      200: {
        description: 'Gets all friend requests',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                username: {
                    type: 'string'
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