import { Auth0Provider } from "@bcwdev/auth0provider";
import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";
import { missionService } from "../services/MissionsService.js";


export class LocationsController extends BaseController {

    constructor() {
        super('/api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.searchLocations)
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async getLocations(request, response, next) {
        try {
            const locations = await locationsService.getLocations()
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }

    async searchLocations(locationId) {

        const locations = await missionService.searchLocations(locationId)
        return locations
    }

}