import { Schema } from "mongoose";


export const RatsSchema = new Schema({
    name: { type: String, required: true },
    callsign: { type: String, required: true },
    picture: { type: String, required: true },
    specialities: [{ type: String, required: true }]
}, { toJSON: { virtuals: true } })