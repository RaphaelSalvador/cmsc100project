export const root = {
    get: {
      description: 'Returns home function',
      operationId: 'home', 
      tags: [
          'Base'
      ],
      responses: {
        200: {
          description: 'returns hello world',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                    hello: {
                        type: 'string',
                        example: 'world'
                    }
                }
              }
            }
          }
        }
      }
    }
  };