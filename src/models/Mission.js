import { Schema } from "mongoose";


export const MissionsSchema = new Schema({
    codename: { type: String, required: true },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' }
}, { toJSON: { virtuals: true } })