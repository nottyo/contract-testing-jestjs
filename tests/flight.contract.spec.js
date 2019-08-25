import { flightRouteSchema } from '@/support/flight_route_schema'
import HttpStatus from 'http-status-codes'
import { FlightAPI } from '@/support/flight_api'
import { matchers } from 'jest-json-schema'
let flightAPI

describe('Flight API Contract Test', () => {
    beforeAll(() => {
        flightAPI = new FlightAPI()
        expect.extend(matchers)
    })

    test(`should return data as its spec`, async () => {
        // when
        const response = await flightAPI.getFlight('BKK', 'ICN')
        // then
        expect(response.status).toBe(HttpStatus.OK)
        expect(response.data).toMatchSchema(flightRouteSchema)
    })
})