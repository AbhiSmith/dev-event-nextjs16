import {NextRequest, NextResponse} from "next/server";  
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        await connectDB(); // Ensure the database connection is established

    } catch (error) {
        console.error("Error in POST /api/events:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

}