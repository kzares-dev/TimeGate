import { atom } from "recoil"

export const quizAtom = atom({
    key: "quizAtom",
    default: {
        time: 0,
        quizId: "",
        answers: [],
        userId: "",
    },
})