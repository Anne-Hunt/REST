import { Auth0Provider } from "@bcwdev/auth0provider";
import { missionService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
    constructor() {
        super('/api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.createMission)
            .put('/:missionId', this.updateMission)
        // .use(Auth0Provider.getAuthorizedUserInfo)
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

    async updateMission(request, response, next) {
        try {
            const missionId = request.params.missionId
            const updateData = request.body
            const missionToUpdate = await missionService.updateMission(missionId, updateData)
            response.send(missionToUpdate)
        } catch (error) {
            next(error)
        }
    }
}