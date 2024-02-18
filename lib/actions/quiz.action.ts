"use server";
import Quiz from "../database/models/quiz.model";
import { connectToDatabase } from "../database";
import { handleError, transformNumberIntoArray } from "../utils";
import { createRecord } from "./record.action";

export async function getLibrary() {

    try {
        await connectToDatabase();
        const allQuizzes = await Quiz.find({});

        return allQuizzes.map(quiz => {
            const { _id, title } = quiz;
            return { _id, title };
        });

    } catch (error) {
        handleError(error)
    }
}

export async function getQuizById(quizId: string) {
    try {
        await connectToDatabase();

        const quiz = await Quiz.findById(quizId);
        delete quiz.solutions;

        return JSON.parse(JSON.stringify(quiz));
    } catch (error) {
        handleError(error);
    }
}

export async function getQuizDescription(quizId: string) {
    try {
        await connectToDatabase();

        const quiz = await Quiz.findById(quizId);

        // delete the innecesary data 
        delete quiz.questionsList
        delete quiz.solutions

        return JSON.parse(JSON.stringify(quiz));
    } catch (error) {
        handleError(error);
    }
}

// Function to create a new entry in the Quiz model
export async function createQuiz(quizData: any) {
    try {
        connectToDatabase()

        const newEntry = new Quiz(quizData);
        const result = await newEntry.save();

        return result;
    } catch (error) {
        handleError(error);
    }
}

interface ValidateData {
    id: string,
    user: string,
    time: number,
    answers: number,
}

export async function verifyAnswers(validateData: ValidateData) {
    try {
        connectToDatabase()

        // first get the correct quiz
        const quiz = await getQuizById(validateData.id)

        const { solutions } = quiz;
        const quizSolutions = transformNumberIntoArray(solutions);
        const userSolutions = transformNumberIntoArray(validateData.answers);

        // check if every answer is equals to the user answe
        let correctAnswers = 0
        quizSolutions.map((solution, i) => {
            if (solution === userSolutions[i]) {
                correctAnswers += 1;
            }
        })
        // asign the score 
        const baseScore = 10
        const penalty = 1 / validateData.time;

        const finalScore = Math.round(baseScore * correctAnswers * (1 + penalty));

        // creating & save record
        const record = {
            user: validateData.user.toString(),
            quiz: validateData.id,
            score: finalScore,
            time: validateData.time,
            solutions: validateData.answers,
        }

        const newRecord = await createRecord(record);

        return JSON.parse(JSON.stringify({
            ...quiz,
            ...record,
            solutionsArray: {
                quizSolutions,
                userSolutions,
            }
        })  )




    } catch (error) {
        handleError(error);
    }
}