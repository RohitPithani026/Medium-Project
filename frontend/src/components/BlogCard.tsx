import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`} className="transition-transform duration-300 hover:scale-105">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl border border-transparent dark:border-gray-700 w-full max-w-screen-md cursor-pointer mb-6 mt-4">
                {/* Header: Avatar, Author Name, Date */}
                <div className="flex items-center space-x-6 pb-6">
                    <Avatar className="h-14 w-14 dark:border-gray-800 shadow-xl">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>{authorName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">
                            {authorName}
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <Circle />
                            <span>{publishedDate}</span>
                        </div>
                    </div>
                </div>

                {/* Blog Title */}
                <div>
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                        {title}
                    </h2>
                    <p className="text-md text-gray-600 dark:text-gray-300 mt-4 line-clamp-3">{content}</p>

                    <div className="flex items-center justify-between pt-6 text-sm text-gray-500 dark:text-gray-400">
                        <span>{`${Math.ceil(content.length / 100)} minute(s) read`}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export function Circle() {
    return <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-500"></div>;
}
