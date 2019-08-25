export const flightRouteSchema = {
    type: 'object',
    properties: {
        status: {
            type: 'string',
            enum: ['success', 'failed']
        },
        data: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    depart: {
                        type: 'string',
                        format: 'date-time'
                    },
                    arrive: {
                        type: 'string',
                        format: 'date-time'
                    },
                    flight: {
                        type: 'object',
                        properties: {
                            code: { type: 'string' },
                            number: { type: 'integer' }
                        },
                        required: ['code', 'number']
                    },
                    airline: { type: 'string' },
                    isDirectFlight: { type: 'boolean' },
                    flightStatus: {
                        type: 'string',
                        enum: ['SCHEDULED', 'DELAYED', 'DIVERTED']
                    },
                    aircraft: {
                        type: 'object',
                        properties: {
                            manufacturer: { type: 'string' },
                            model: { type: 'string' }
                        }
                    }
                },
                required: ['depart', 'arrive', 'flight', 'airline', 
                    'isDirectFlight', 'flightStatus', 'aircraft']
            }
        }
    }
}