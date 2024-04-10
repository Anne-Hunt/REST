import { dbContext } from "../db/DbContext.js"

class LocationsService {
    async getLocations() {
        const locations = await dbContext.Location.find()
        return locations
    }
}

export const locationsService = new LocationsService()