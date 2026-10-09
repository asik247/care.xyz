// db connect and connect funk return..

import { MongoClient, ServerApiVersion } from "mongodb";


const uri = process.env.DBURI
console.log(uri);
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

export const connect = async (cName) => {
    await client.connect();
    const db = client.db("careNext")
    return db.collection(cName)
}