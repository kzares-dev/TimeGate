import mongoose, { Schema, model, models } from "mongoose";

const QuizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    questions: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: false // Puedes cambiar a true si es obligatorio
    }
});

const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);

export default Quiz;