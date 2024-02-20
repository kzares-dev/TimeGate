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
    // get the actual user 
    const user = await getUser(userId);
    const newUser = { ...user, score: user.score + score };

    const updatedUser = User.updateOne({ clerkId: userId }, newUser);

    return JSON.parse(JSON.stringify(updatedUser))


  } catch (error) {
    handleError(error)
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

export async function getAllUsers(page: number, limit: number) {
  try {
    await connectToDatabase();

    const users = await User.find({})
      .lean()
      .skip((page - 1) * limit)
      .limit(limit);


    return users;
  } catch (error) {
    handleError(error);
    return [];
  }
}
