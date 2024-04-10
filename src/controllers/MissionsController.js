import { missionService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class Missions extends BaseController {
    constructor() {
        super('/api/missions')
        this.router
            .get('', this.getMissions)
    }

    async getMissions(request, response, next) {
        try {
            const missions = await missionService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}