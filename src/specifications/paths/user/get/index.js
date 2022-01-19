export const get = {
    description: 'Gets user',
    operationId: 'getUser', 
    tags: [
        'User'
    ],
    responses: {
      200: {
        description: 'Gets user',
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