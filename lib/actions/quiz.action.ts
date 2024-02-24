"use server";
import Quiz from "../database/models/quiz.model";
import { connectToDatabase } from "../database";
import { handleError, transformNumberIntoArray } from "../utils";
import { createRecord, getRecord } from "./record.action";
import { increaseUserScore } from "./user.action";

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



// get a random quiz id
export async function getRandomQuizId() {
    try {
        await connectToDatabase();

        const totalQuizzes = await Quiz.countDocuments();
        const randomIndex = Math.floor(Math.random() * totalQuizzes);

        const randomQuiz = await Quiz.findOne().skip(randomIndex).select('_id');

        if (!randomQuiz) {
            throw new Error("No se encontró ningún quiz aleatorio.");
        }

        return randomQuiz._id;
    } catch (error) {
        handleError(error);
        throw new Error("Error al obtener un quiz aleatorio");
    }
}

// Verification of the correct ans, 
// this method uses a combination of all others
interface ValidateData {
    id: string,
    user: string,
    time: number,
    answers: number,
    title: string,
}

export async function verifyAnswers(validateData: ValidateData) {
    try {
        connectToDatabase()

        // first get the correct quiz
        const quiz = await getQuizById(validateData.id)

        const { solutions } = quiz;

        // transforming the solutions into arrays
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
            title: validateData.title,
            user: validateData.user.toString(),
            quiz: validateData.id,
            score: finalScore,
            time: validateData.time,
            solutions: validateData.answers,
        }

        // check if is any prev record 
        const newRecord = await createRecord(record);
        const parsedRecord = JSON.parse(JSON.stringify(newRecord))

        // this is needed to check if the user has a prev ans & showing 
        const userSolutionsNew = transformNumberIntoArray(parsedRecord.solutions)


        // saving & updating the user score
        await increaseUserScore(validateData.user.toString(), finalScore)


        return JSON.parse(JSON.stringify({
            title: quiz.title,
            questions: quiz.questions,
            questionsList: quiz.questionsList,
            ...parsedRecord,
            solutionsArray: {
                quizSolutions,
                userSolutions: userSolutionsNew,
            }
        }))




    } catch (error) {
        handleError(error);
    }
}

export async function getQuizMetrics(userId: string, quizId: string) {
    const quiz = await getQuizById(quizId);
    const parsedQuiz = JSON.parse(JSON.stringify(quiz));

    const record = await getRecord(userId, quizId);
    const parsedRecord = JSON.parse(JSON.stringify(record));

    // implemening the transformation into array of the solutions
    const solutionsArray = {
        quizSolutions: transformNumberIntoArray(quiz.solutions),
        userSolutions: transformNumberIntoArray(record.solutions)
    }

    return JSON.parse(JSON.stringify({
        ...parsedQuiz,
        ...parsedRecord,
        solutionsArray,
    }))

}