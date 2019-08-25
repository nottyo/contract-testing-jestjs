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

    test(`response should matched with snapshots`, async () => {
        // when
        const response = await flightAPI.getFlight('BKK', 'ICN')
        // then
        expect(response.status).toBe(HttpStatus.OK)
        expect(response.data.status).toMatchSnapshot()
        response.data.data.forEach((flightData) => {
            expect(flightData).toMatchSnapshot({
                aircraft: expect.objectContaining({
                    manufacturer: expect.toBeOneOf(['Boeing', 'Airbus']),
                    model: expect.any(String)
                }),
                airline: expect.any(String),
                arrive: expect.stringMatching(/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}\+[0-9]{2}:[0-9]{2}/),
                depart: expect.stringMatching(/[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}\+[0-9]{2}:[0-9]{2}/),
                flight: expect.objectContaining({
                    code: expect.any(String),
                    number: expect.any(Number)
                }),
                flightStatus: expect.toBeOneOf(['SCHEDULED', 'DELAYED', 'DIVERTED']),
                isDirectFlight: expect.any(Boolean)
            })
        })
    })
})