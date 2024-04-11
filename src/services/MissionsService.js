import { dbContext } from "../db/DbContext.js"


class MissionsService {
    async getMissions() {
        const missions = await dbContext.Mission.find().populate('rat', '-name -picture').populate('location')
        return missions
    }

    async createMission(missiondata) {
        const mission = await dbContext.Mission.create(missiondata)
        await mission.populate('rat', '-name -picture')
        await mission.populate('location')
        return mission
    }

    async updateMission(missionId, updateData) {
        const missionUpdate = await dbContext.Mission.findById(missionId)
        if (!missionUpdate) throw new Error(`No known mission at ${missionId}`)

        missionUpdate.codename = updateData.codename ?? missionUpdate.codename
        missionUpdate.objective = updateData.objective ?? missionUpdate.objective
        missionUpdate.year = updateData.year ?? missionUpdate.year
        missionUpdate.locationId = updateData.locationId ?? missionUpdate.locationId
        missionUpdate.ratId = updateData.ratId ?? missionUpdate.ratId
        missionUpdate.completed = updateData.completed ?? missionUpdate.completed
        await missionUpdate.save()

        return missionUpdate
    }

    async searchRats(ratId) {
        const missions = await dbContext.Mission.find({ ratId: ratId }).populate('location')
        return missions
    }

    async searchLocations(locationId) {
        const missions = await dbContext.Mission.find({ locationId: locationId }).populate('rat', '-name -picture')
        return missions
    }
}

export const missionService = new MissionsService()