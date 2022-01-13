export const get = {
    description: 'Get friends list',
    operationId: 'getFriendList', 
    tags: [
        'Friend'
    ],
    responses: {
      200: {
        description: 'Get friends list',
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