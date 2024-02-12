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
