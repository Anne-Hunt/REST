import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";


export class RatsController extends BaseController {
    constructor() {
        super('/api/rats')
        this.router
            .get('', this.getRats)
            .get('', this.searchRat)
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
            const ratquery = request.query
            let rat = await ratsService.searchRats(ratquery)
            response.send(rat)
        } catch (error) {
            next(error)
        }
    }
}