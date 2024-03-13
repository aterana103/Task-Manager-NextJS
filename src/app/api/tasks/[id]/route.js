import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}) {
    const {title, description} = await request.json()
    const updateTask = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title,
            description
        }
    })
    return NextResponse.json(updateTask)
}

export async function DELETE(request, {params}) {
    try {
        const deleteTask = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(deleteTask)
    } catch (error) {
        return NextResponse.error({
            status: 404,
            message: error.message
        })
    }
}