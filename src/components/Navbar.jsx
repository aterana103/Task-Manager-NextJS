import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-slate-800 py-2">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Task Manager</h1>
                <ul className="flex gap-x-2 text-lg">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/tasks">
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link href="/tasks/create">
                            Create Task
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;