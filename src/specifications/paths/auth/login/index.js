export const post = {
    description: 'Login a user',
    operationId: 'login', 
    tags: [
        'Auth'
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        username: {
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
        description: 'Logs in a user',
        content: {
          'application/json': {
            schema: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean'
                    },
                    token: {
                        type: 'string'
                    }
                }
            }
          }
        }
      }
    },
    security: [
        {}
    ]
  };