"use server"

import { connectToDatabase } from "../database"
import User from '@/lib/database/models/user.model'
import { handleError } from "../utils"
import { UserParams } from '@/types'


export async function createUser(user: UserParams) {

  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser))
  }
  catch (error) {
    handleError(error)
  }
}

export async function getUser(userId: string) {
  try {
    connectToDatabase();

    const user = await User.findOne({ clerkId: userId });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error)
  }
}


export async function increaseUserScore(userId: string, score: number) {
  try {
    connectToDatabase();
    const user = await getUser(userId);
    const newScore = user.score + score;

    const updatedUser = await User.findOneAndUpdate({ clerkId: userId },  { score: newScore } );

    return { score: updatedUser.score };

  } catch (error) {
    // Manejar el error de forma adecuada
    console.error("Error al incrementar el puntaje del usuario:", error);
    throw new Error("Hubo un error al incrementar el puntaje del usuario");
  }
}

export async function updateUser(clerkId: string, user: UserParams) {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export async function getLeaderBoard(page: number, limit: number) {
  try {
    await connectToDatabase();

    const users = await User.find({})
      .sort({ score: -1 }) // Ordenar por el campo "score" de forma descendente
      .skip((page - 1) * limit)
      .limit(limit);

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    handleError(error);
    return [];
  }
}

export async function getUserRankingPlace(user: UserParams) {
  try {
    await connectToDatabase();

    const userFinded = await User.findOne({ clerkId: user.clerkId });

    // if the user dosent exists, this function will create it
    if (!userFinded) {
      const userCreated = await createUser(user);
      const userRankingPlace = await User.countDocuments({ score: { $gt: userCreated.score } }) + 1;
      return userRankingPlace
    }

    const userScore = userFinded.score;

    const userPlace = await User.countDocuments({ score: { $gt: userScore } }) + 1;

    return userPlace;
  } catch (error) {
    handleError(error);
  }
}
