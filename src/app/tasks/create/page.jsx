"use client";

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';

function CreateTaskPage({ params }) {
    const router = useRouter()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data.title);
                    setDescription(data.description);
                }
            );
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (params.id) {
            const response = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description })
            });
        } else {
            const response = await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description })
            });            
        }
        router.refresh()
        router.push("/")
    }

    return (
        <div className="h-screen flex justify-center">
            <form className="w-1/2 flex flex-col justify-center" onSubmit={onSubmit}>
                <h1 className="text-3xl font-bold mb-4">
                    {
                        params.id ? "Edit Task" : "Create new Task"
                    }
                </h1>

                <label htmlFor="title" className="mb-2">Title</label>
                <input onChange={
                    (e) => setTitle(e.target.value)
                } value={title} name="title" type="text" placeholder="Title" className="p-2 mb-4 text-black" />

                <label htmlFor="description" className="mb-2">Description</label>
                <textarea onChange={
                    (e) => setDescription(e.target.value)
                } value={description} name="description" placeholder="Description" className="p-2 mb-4 text-black"></textarea>

                <div className="flex justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        {
                            params.id ? "Edit" : "Create"
                        }
                    </button>
                    {
                        params.id && (
                            <button onClick={ async () => {
                                const response = await fetch(`/api/tasks/${params.id}`, {
                                    method: "DELETE"
                                });
                                router.refresh()
                                router.push("/")
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded">
                                Delete
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    );
}

export default CreateTaskPage;