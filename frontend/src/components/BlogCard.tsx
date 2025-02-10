import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Button } from "@/components/button"
import { CalendarIcon, ClockIcon } from "lucide-react"

interface BlogCardProps {
    authorName: string
    title: string
    content: string
    publishedDate: string
    id: number
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    const navigate = useNavigate()

    const formattedDate = new Date(publishedDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })

    return (
        <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 pt-6">
            <div className="p-5 sm:p-7 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 w-full max-w-lg sm:max-w-3xl mb-8 transition-all duration-300 ease-in-out transform group hover:scale-[1.02] hover:shadow-2xl hover:border-primary">
                
                {/* Author Info */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14 border-2 border-primary shadow-md">
                        <AvatarImage alt={authorName} />
                        <AvatarFallback className="text-sm sm:text-lg font-semibold">{authorName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="text-sm sm:text-md font-medium text-gray-900 dark:text-gray-100">{authorName}</span>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 opacity-80" />
                            <span>{formattedDate}</span>
                        </div>
                    </div>
                </div>

                {/* Blog Title */}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors duration-300 leading-snug mb-2 sm:mb-3">
                    {title}
                </h2>

                {/* Blog Content Preview */}
                <div
                    className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed line-clamp-3 sm:line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* Footer: Read Time & Button */}
                <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-gray-300 dark:border-gray-700">
                    <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <ClockIcon className="h-4 w-4 opacity-80" />
                        <span>{`${Math.ceil(content.length / 100)} min read`}</span>
                    </div>
                    <Button 
                        variant="default" 
                        size="sm" 
                        className="text-xs sm:text-sm group-hover:text-primary transition-all duration-300"
                        onClick={() => navigate(`/blog/${id}`)}
                    >
                        Read more
                    </Button>
                </div>
            </div>
        </div>
    )
}

export function Circle() { 
    return <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-500"></div>; 
}
