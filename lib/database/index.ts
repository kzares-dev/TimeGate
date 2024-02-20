import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://kzares:k4UOeI2dS5bigMod@festival.ay7heaq.mongodb.net/?retryWrites=true&w=majority`;

//

let cached = (global as any).mongoose || { conn: null, promise: null};

export const connectToDatabase = async () => {

    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "festival",
        bufferCommands: true,
    })

    cached.conn = await cached.promise;

    return cached.conn
}