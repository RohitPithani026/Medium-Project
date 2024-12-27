import { useState } from 'react';
import { Toaster } from "../components/sonner";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";
import { useUserBlogs, useBlogDelete, useBlogUpdate } from "../hook";
import { toast } from "sonner";
import { UserBlogCard } from "@/components/UserBlogCard";
import { Link } from "react-router-dom";

export const UserBlogsPage = () => {
    const userId = localStorage.getItem("id");
    const { loading, userBlog, setUserBlog } = useUserBlogs({ userId: userId || "" });

    const [editingBlog, setEditingBlog] = useState<{ id: number, title: string, content: string } | null>(null);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newContent, setNewContent] = useState<string>('');

    const handleDelete = async (id: number) => {
        try {
            const { deleteBlog } = useBlogDelete({ id: id.toString() });
            await deleteBlog();
            toast.success(`Successfully deleted blog with ID: ${id}`);
            setUserBlog((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
        } catch (error) {
            toast.error(`Failed to delete blog with ID: ${id}`);
            console.error(error);
        }
    };

    const handleUpdateClick = (blog: { id: number, title: string, content: string }) => {
        setEditingBlog(blog);
        setNewTitle(blog.title);
        setNewContent(blog.content);
    };

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingBlog) return;

        const updatedData = { title: newTitle, content: newContent };
        try {
            const { updateBlog } = useBlogUpdate({ id: editingBlog.id.toString() });
            await updateBlog(updatedData);
            toast.success(`Successfully updated blog with ID: ${editingBlog.id}`);
            setUserBlog((prevBlogs) =>
                prevBlogs.map((blog) =>
                    blog.id === editingBlog.id ? { ...blog, ...updatedData } : blog
                )
            );
            setEditingBlog(null); 
        } catch (error) {
            toast.error(`Failed to update blog with ID: ${editingBlog.id}`);
            console.error(error);
        }
    };

    if (loading || !userBlog) {
        toast("Blog is loading...");
        return (
            <div>
                <Appbar />
                <div className="h-screen flex items-center justify-center">
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="pt-12 pb-8 flex flex-col items-center w-full">
                <div className="w-full px-4 md:px-8">
                    {userBlog.length === 0 ? (
                        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md border">
                            <h2 className="text-2xl font-semibold text-gray-700">No Blogs Posted</h2>
                            <p className="mt-2 text-gray-500">It looks like you haven't posted any blogs yet. Start sharing your ideas now!</p>
                            <Link to={"/publish"}>
                                <button
                                    className="mt-4 bg-gray-800 text-white p-3 rounded-md w-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Create One
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <Toaster />
                            <div>
                                {userBlog.map((blog) => (
                                    <div key={blog.id} className="mb-4">
                                        <UserBlogCard
                                            id={blog.id}
                                            authorName={blog.author.name || "Anonymous"}
                                            title={blog.title}
                                            content={blog.content}
                                            publishedDate={blog.publishedAt}
                                            onDelete={(id) => handleDelete(id)}
                                            onUpdate={() => handleUpdateClick(blog)}
                                        />
                                        {editingBlog?.id === blog.id && (
                                            <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                                                <form onSubmit={handleUpdateSubmit}>
                                                    <div className="mb-4">
                                                        <label htmlFor="newTitle" className="block text-sm font-medium text-gray-700">Update Title</label>
                                                        <input
                                                            type="text"
                                                            id="newTitle"
                                                            className="mt-2 p-2 w-full border rounded-md"
                                                            value={newTitle}
                                                            onChange={(e) => setNewTitle(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="newContent" className="block text-sm font-medium text-gray-700">Update Content</label>
                                                        <textarea
                                                            id="newContent"
                                                            rows={4}
                                                            className="mt-2 p-2 w-full border rounded-md"
                                                            value={newContent}
                                                            onChange={(e) => setNewContent(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="flex justify-end space-x-4">
                                                        <button
                                                            type="submit"
                                                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                                                        >
                                                            Save Changes
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                                            onClick={() => setEditingBlog(null)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
