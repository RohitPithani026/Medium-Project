import { useParams } from "react-router-dom";
import { Blog, useBlog } from "../hook";
import { Appbar } from "./Appbar";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const { id } = useParams();
    const { blogg } = useBlog({ id: id || "" });

    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase();
    };

    const initials = blog.author.name ? getInitials(blog.author.name) : "A";

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="group p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent dark:border-gray-700 w-full max-w-screen-xl cursor-pointer mb-6 mt-4 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                    {/* Blog Content */}
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-8">
                            <div className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                {blog.title}
                            </div>
                            <div className="text-slate-500 pt-2">
                                Posted on {blog.publishedAt}
                            </div>
                            <div className="pt-4 text-gray-700 dark:text-gray-200">
                                {blog.content}
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="col-span-4">
                            <div className="text-slate-600 text-lg">
                                Author
                            </div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-16 h-16">
                                    <Avatar className="h-16 w-16 rounded-full border-2 border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-xl transition-all">
                                        <AvatarImage src="/avatars/01.png" alt={blog.author.name} />
                                        <AvatarFallback className="font-semibold">{initials}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-2 text-slate-500 dark:text-gray-400">
                                        {blogg?.author.biography}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
