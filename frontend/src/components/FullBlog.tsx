import { useParams } from "react-router-dom"
import { type Blog, useBlog } from "../hook"
import { Appbar } from "./Appbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Card, CardContent } from "@/components/card"
import { Separator } from "@/components/separator"
import { Clock, Calendar } from "lucide-react"

import { motion, AnimatePresence } from "framer-motion"

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const { id } = useParams()
    const { blogg } = useBlog({ id: id || "" })

    const getInitials = (name: string): string => {
        return name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase()
    }

    const initials = blog.author.name ? getInitials(blog.author.name) : "A"

    const readingTime = Math.ceil(blog.content.split(" ").length / 200)

    return (
        <div className="min-h-screen">
            <Appbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Card className="mb-8 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white dark:bg-gray-800">
                                <CardContent className="prose dark:prose-invert max-w-none p-8 sm:p-12">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
                                    >
                                        {blog.title}
                                    </motion.h1>
                                    <div className="flex flex-wrap items-center text-gray-700 dark:text-gray-300 space-x-4 mb-8">
                                        <div className="flex items-center">
                                            <Calendar className="w-5 h-5 mr-2 text-primary" />
                                            <span>{blog.publishedAt}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-5 h-5 mr-2 text-primary" />
                                            <span>{readingTime} min read</span>
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <Card className="sticky top-8 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white dark:bg-gray-800">
                                <CardContent className="p-8">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="flex flex-col items-center mb-6"
                                    >
                                        <Avatar className="h-20 w-20 rounded-full border-4 border-primary shadow-lg mb-4 hover:scale-105 transition-transform duration-300">
                                            <AvatarImage src="/avatars/01.png" alt={blog.author.name} />
                                            <AvatarFallback className="text-3xl font-semibold bg-gradient-to-br from-primary to-primary-dark text-gray">
                                                {initials}
                                            </AvatarFallback>
                                        </Avatar>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                                            {blog.author.name || "Anonymous"}
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Author</p>
                                    </motion.div>
                                    <Separator className="my-6" />
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        className="text-gray-700 dark:text-gray-200 text-base leading-relaxed italic text-center"
                                    >
                                        "{blogg?.author.biography || "No biography available."}"
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}