import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions() {
        const missions = await dbContext.Mission.find().populate('rat', '-name').populate('location')
        return missions
    }
}

export const missionService = new MissionsService()