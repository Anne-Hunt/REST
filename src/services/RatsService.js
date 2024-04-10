import { dbContext } from "../db/DbContext.js"

class RatService {

    async getRats() {
        const rats = await dbContext.Rat.find()
        return rats
    }

    async searchRats(ratquery) {
        const rats = await dbContext.Rat.find(ratquery)
        return rats
    }

}

export const ratsService = new RatService()