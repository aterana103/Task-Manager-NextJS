import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
   const task = await prisma.task.findMany()
   return NextResponse.json(task)
}

export async function POST(request) {
   const {title, description} = await request.json()
   const newTask = await prisma.task.create({
      data: {
        title,
        description
      }
   })
   return NextResponse.json(newTask)
}