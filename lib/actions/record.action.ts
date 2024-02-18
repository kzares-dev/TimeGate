"use server"

import { connectToDatabase } from "../database";
import Record from "../database/models/record.model";
import { handleError } from "../utils";

export async function createRecord(recordData: any) {
    try {
        connectToDatabase();

        // Create new Record
        const newRecord = new Record(recordData);
        const result = await newRecord.save();

        return result;
    } catch (error) {
        handleError(error);
    }
}