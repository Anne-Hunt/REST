import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions() {
        const missions = await dbContext.Mission.find().populate('rat', '-name').populate('location')
        return missions
    }

    async createMission(missiondata) {
        const mission = await dbContext.Mission.create(missiondata)
        await mission.populate('rat', '-name')
        await mission.populate('location')
        return mission
    }
}

export const missionService = new MissionsService()