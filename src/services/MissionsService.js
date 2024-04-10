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

    async updateMission(missionId, updateData) {
        const missionUpdate = await dbContext.Mission.findById(missionId)
        if (!missionUpdate) throw new Error(`No known mission at ${missionId}`)

        missionUpdate.codename = updateData.codename ?? missionUpdate.codename
        missionUpdate.objective = updateData.objective ?? missionUpdate.objective
        missionUpdate.year = updateData.year ?? missionUpdate.year
        missionUpdate.locationId = updateData.locationId ?? missionUpdate.locationId
        missionUpdate.ratId = updateData.ratId ?? missionUpdate.ratId
        missionUpdate.isCompleted = true
        await missionUpdate.save()

        return missionUpdate
    }

    async searchRats(ratId) {
        const missions = await dbContext.Mission.find({ ratId: ratId }).populate('location')
        return missions
    }

    async searchLocations(locationId) {
        const missions = await dbContext.Mission.find({ locationId: locationId }).populate('rat', '-name')
        return missions
    }
}

export const missionService = new MissionsService()