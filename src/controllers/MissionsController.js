import { missionService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
    constructor() {
        super('/api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.createMission)
    }

    async getMissions(request, response, next) {
        try {
            const missions = await missionService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async createMission(request, response, next) {
        try {
            const missiondata = request.body
            const missionAnew = await missionService.createMission(missiondata)
            response.send(missionAnew)
        } catch (error) {
            next(error)
        }
    }
}