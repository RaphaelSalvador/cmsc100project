export const get = {
    description: 'Get all friend requests',
    operationId: 'getFriendRequests', 
    tags: [
        'Friend'
    ],
    responses: {
      200: {
        description: 'Get all friend requests',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                username: {
                    type: 'string'
                },
                createDate: {
                  type: 'number'
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