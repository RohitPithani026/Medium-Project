import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import { CalendarIcon, ClockIcon } from "lucide-react";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    const navigate = useNavigate();

    const formattedDate = new Date(publishedDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 pt-4 sm:pt-6">
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 transition-all duration-300 ease-in-out transform group hover:scale-[1.02] hover:shadow-2xl hover:border-primary">
                
                {/* Author Info */}
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-5">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary shadow-md">
                        <AvatarImage alt={authorName} />
                        <AvatarFallback className="text-xs sm:text-sm font-semibold">{authorName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">{authorName}</span>
                        <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                            <CalendarIcon className="h-3 w-3 opacity-80" />
                            <span>{formattedDate}</span>
                        </div>
                    </div>
                </div>

                {/* Blog Title */}
                <h2 className="text-md sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300 leading-snug mb-2">
                    {title}
                </h2>

                {/* Blog Content Preview */}
                <div
                    className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Footer: Read Time & Button */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-700">
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                        <ClockIcon className="h-3 w-3 opacity-80" />
                        <span>{`${Math.ceil(content.length / 100)} min read`}</span>
                    </div>
                    <Button 
                        variant="default" 
                        size="sm" 
                        className="text-xs group-hover:text-primary transition-all duration-300"
                        onClick={() => navigate(`/blog/${id}`)}
                    >
                        Read more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export function Circle() { 
    return <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-500"></div>; 
}
