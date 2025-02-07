"use client";

import { useState } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { TextEditor } from "@/components/TextEditor";

export const Publish: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isPublishing, setIsPublishing] = useState<boolean>(false);
    const router = useNavigate();

    const handlePublish = async () => {
        setIsPublishing(true);
        try {
            const response = await axios.post<{ id: string }>(
                `${BACKEND_URL}/api/v1/blog`,
                {
                    title,
                    content: description,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                    },
                }
            );
            router(`/blog/${response.data.id}`);
        } catch (error) {
            console.error("Failed to publish:", error);
        } finally {
            setIsPublishing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 flex flex-col">
            <Appbar />
            <div className="flex justify-center items-center flex-1">
                <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a New Blog Post</h2>
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter your title here..."
                            maxLength={100}
                        />
                        <p className="mt-2 text-sm text-gray-500 text-right">{title.length}/100 characters</p>
                    </div>

                    <TextEditor onChange={(value: string) => setDescription(value)} />

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handlePublish}
                            disabled={isPublishing || !title || !description}
                            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out ${isPublishing ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isPublishing ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Publishing...
                                </>
                            ) : (
                                "Publish post"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
