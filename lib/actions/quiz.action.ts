"use server";
import Quiz from "../database/models/quiz.model";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";

export async function getLibrary() {

    try {
        await connectToDatabase();
        const allQuizzes = await Quiz.find({});

        return allQuizzes.map(quiz => JSON.parse(JSON.stringify(quiz)));

    } catch (error) {
        handleError(error)
    }
}