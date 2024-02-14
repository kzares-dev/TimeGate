"use server";
import Quiz from "../database/models/quiz.model";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";

export async function getLibrary() {

    try {
        await connectToDatabase();
        const allQuizzes = await Quiz.find({});

        return [
            {
                id: "qunak",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "qunaka",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "qunaksa",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "qunaksacw",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "qunaksacac",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "qunaksal2iomo",
                title: "lorem ipsum dolir is ameth consecutor",
            },
        ]
        return allQuizzes.map(quiz => JSON.parse(JSON.stringify(quiz)));

    } catch (error) {
        handleError(error)
    }
}

export async function getQuizById(quizId: string) {
    try {
        await connectToDatabase();

        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            return {
                title: 'Quiz de Historia Antigua',
                category: 'Historia',
                questions: 10,
                value: 100,
                data: {
                    difficulty: 'Intermedio',
                    topics: ['Egipto', 'Grecia', 'Roma']
                }
            }
        }

        return JSON.parse(JSON.stringify(quiz));
    } catch (error) {
        handleError(error);
    }
}