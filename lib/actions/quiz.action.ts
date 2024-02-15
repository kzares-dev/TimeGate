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
                id: "5f7f2a0ec38809c96b78710a",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "5f7f2a0ec38809c96b78710a",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "5f7f2a0ec38809c96b78710a",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "5f7f2a0ec38809c96b78710a",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "5f7f2a0ec38809c96b78710a",
                title: "lorem ipsum dolir is ameth consecutor",
            },
            {
                id: "5f7f2a0ec38809c96b78710a",
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
       // await connectToDatabase();

       // const quiz = await Quiz.findById("60e07865c0858226130c8f46");

       const quiz = false
        if (!quiz) {
            return {
                title: 'Quiz de Historia Antigua',
                category: 'Historia',
                questions: 2,
                value: 100,
                questionsList: [
                    {
                        quizQuestion: "What is the capital of France?",
                        quizOptions: ["Paris", "London", "Berlin", "Madrid"],
                    },
                    {
                        quizQuestion: "Are you gay?",
                        quizOptions: ["Paris", "London", "Berlin", "Madrid"],
                    },
                ]
            }
        }

       // return JSON.parse(JSON.stringify(quiz));
    } catch (error) {
        handleError(error);
    }
}