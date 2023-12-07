import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod';
import prisma from "@/prisma/client"


const createSchema = z.object({
    title: z.string().min(1,'A title is required!').max(255),
    description: z.string().min(1, 'A description is required!')
});

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