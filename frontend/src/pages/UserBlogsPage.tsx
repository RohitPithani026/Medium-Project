import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { UserBlogSkeleton } from '../components/UserBlogsSkeleton';
import { useUserBlogs, useBlogDelete, useBlogUpdate } from "../hook/index";
import { toast, ToastContainer } from "react-toastify";
import { UserBlogCard } from "@/components/UserBlogCard";
import { UpdateBlogModal } from "@/components/UpdateBlogModal"; 
import { Link } from "react-router-dom";
import { AppbarSkeleton } from "@/components/AppbarSkeleton";

export const UserBlogsPage = () => {
    const userId = localStorage.getItem("id");
    const { loading, userBlog, setUserBlog } = useUserBlogs({ userId: userId || "" });

    const [editingBlog, setEditingBlog] = useState<{ id: number, title: string, content: string } | null>(null);

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

    const handleUpdateSubmit = async (updatedData: { title: string; content: string }) => {
        if (!editingBlog) return;

        try {
            const { updateBlog } = useBlogUpdate({ id: editingBlog.id.toString() });
            await updateBlog(updatedData);
            toast.success(`Successfully updated blog with ID: ${editingBlog.id}`);

            // Update UI
            setUserBlog((prevBlogs) =>
                prevBlogs.map((blog) =>
                    blog.id === editingBlog.id ? { ...blog, ...updatedData } : blog
                )
            );

            setEditingBlog(null); // Close modal
        } catch (error) {
            toast.error(`Failed to update blog with ID: ${editingBlog.id}`);
            console.error(error);
        }
    };

    if (loading || !userBlog) {
        return (
            <div>
                <AppbarSkeleton />
                <div className="h-screen flex items-center justify-center">
                    <UserBlogSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="pt-8 pb-8 flex flex-col items-center w-full">
                <div className="w-full px-4 md:px-8">
                    {userBlog.length === 0 ? (
                        <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md border">
                            <h2 className="text-2xl font-semibold text-gray-700">No Blogs Posted</h2>
                            <p className="mt-2 text-gray-500">It looks like you haven't posted any blogs yet. Start sharing your ideas now!</p>
                            <Link to={"/publish"}>
                                <button
                                    className="mt-4 bg-gray-800 text-white p-3 rounded-md w-full hover:bg-gray-700"
                                >
                                    Create One
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                            <ToastContainer autoClose={3000} />
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
                                            onUpdate={() => setEditingBlog(blog)} // ✅ Open modal with blog data
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ✅ Update Blog Modal */}
            {editingBlog && (
                <UpdateBlogModal
                    blog={editingBlog}
                    onClose={() => setEditingBlog(null)}
                    onUpdate={handleUpdateSubmit}
                />
            )}
        </div>
    );
};
