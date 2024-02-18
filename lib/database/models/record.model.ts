import { Schema, model, models } from "mongoose";

const RecordSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    quiz: { type: Schema.Types.ObjectId, ref: "Quiz" },
    score: {type: Number, required: true},
    time: {type: Number, required: true},
    solutions: {type: Number, required: true},

})

const Record = models.Record || model('Record', RecordSchema);

export default Record;