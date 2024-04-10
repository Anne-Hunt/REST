import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions() {
        const missions = await dbContext.Mission.find().populate('rats').populate('locations')
        return missions
    }
}

export const missionService = new MissionsService()