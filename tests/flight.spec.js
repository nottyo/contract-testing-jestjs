import HttpStatus from 'http-status-codes'
import { FlightAPI } from '@/support/flight_api'
let flightAPI
describe('Flight API Test', () => {
    beforeAll(() => {
        flightAPI = new FlightAPI()
    })

    test(`should return Thai Airways flight from BKK to ICN`, async () => {
        // when
        const response = await flightAPI.getFlight('BKK', 'ICN')
        // then
        expect(response.status).toBe(HttpStatus.OK)
        expect(response.data.status).toBe('success')
        const tgFlights = response.data.data.filter((flight) => flight.airline === 'Thai Airways International')
        expect(tgFlights.length).toBeGreaterThanOrEqual(1)
    })
})