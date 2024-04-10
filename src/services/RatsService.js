import { dbContext } from "../db/DbContext.js"

class RatService {

    async getRats() {
        const rats = await dbContext.Rat.find()
        return rats
    }

}

export const ratsService = new RatService()