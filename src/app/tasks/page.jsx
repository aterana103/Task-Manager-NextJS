import { prisma } from "@/libs/prisma";
import TaskCard from '@/components/TaskCard';

async function getTasks() {
    return await prisma.task.findMany();
}

async function TasksPage() {
    const tasks = await getTasks();

    return (
        <div className="container mx-auto h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Tasks Page</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task}/>
                    ))
                }
            </div>
        </div>
    );
}

export default TasksPage;