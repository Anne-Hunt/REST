import { Auth0Provider } from "@bcwdev/auth0provider";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";
import { missionService } from "../services/MissionsService.js";


export class RatsController extends BaseController {
    constructor() {
        super('/api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.searchRat)
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async getRats(request, response, next) {
        try {
            let rats = await ratsService.getRats()
            response.send(rats)
        } catch (error) {
            next(error)
        }
    }

    async searchRat(request, response, next) {
        try {
            const ratId = request.params.id
            let rat = await missionService.searchRats(ratId)
            response.send(rat)
        } catch (error) {
            next(error)
        }
    }
}