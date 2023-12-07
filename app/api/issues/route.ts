import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client"
import { createSchema } from "../../createSchema";
export async function POST(request: NextRequest){
    const body = await request.json();
    const valid = createSchema.safeParse(body);
    if(!valid.success){
        return NextResponse.json(valid.error.format(), {status:400});
    }
    const newIssues = await prisma.issues.create({
        data : {
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(newIssues, {status:201});
}   