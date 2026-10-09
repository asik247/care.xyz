// db data get and post here.

import { connect } from "@/lib/dbConnect";

export async function GET() {
    const collection = await connect("services");

    const result = await collection.find().toArray();

    return Response.json({
        result,
    });
}

// POST data

export async function POST(req) {
    const title = await req.json();

    const collection = await connect("services");

    const result = await collection.insertOne(title);

    return Response.json({
        success: true,
        message: "Data inserted",
        insertedId: result.insertedId,
    });
}