"use server"

import { connectToDatabase } from "../database";
import Record from "../database/models/record.model";
import { handleError } from "../utils";

export async function createRecord(recordData: any) {
    try {
        connectToDatabase();

        // check if is any existing record
        const pastRecord = await getRecord(recordData.user, recordData.quiz);

        if (pastRecord) return pastRecord

        // Create new Record
        const newRecord = new Record(recordData);
        const result = await newRecord.save();

        return result;
    } catch (error) {
        handleError(error);
    }
}

export async function getRecord(user: string, quiz: string) {

    try {
        connectToDatabase();

        const record = await Record.findOne({ user, quiz });
        return record || false;


    } catch (error) {
        handleError(error)
    }
}

export async function getUserLastRecords(userId: string) {
    try {
        connectToDatabase();

        const records = await Record.find({ user: userId.toString() });
        if(records.length === 0) return "No ha realizado ningun quiz hasta el momento"
        
        return records;

    } catch (error) {
        handleError(error);
        return [];
    }
}