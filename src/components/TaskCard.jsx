import Link from "next/link";

function TaskCard({ task }) {
    return (
        <Link href={`/tasks/edit/${task.id}`}>
            <div className="bg-white shadow-md rounded-md p-4 mt-4">
                <h1 className="text-xl font-bold text-black">{task.title}</h1>
                <p className="text-gray-800">{task.description}</p>
                <p className="text-sm text-gray-500">{new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
        </Link>
    );
}

export default TaskCard;