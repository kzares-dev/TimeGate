"use server";
import CheckedQuiz from "@/components/CheckedQuiz";
import { getQuizMetrics } from "@/lib/actions/quiz.action";
import { parseUrlParams } from "@/lib/utils";

async function Results({ params }: { params: { query: string } }) {

    const queryParams = parseUrlParams(params.query);

    const state = await getQuizMetrics(queryParams.user.toString(), queryParams.quiz.toString())


    return (
        <CheckedQuiz state={state} />
    )
}

export default Results
