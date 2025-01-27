import { Card, CardContent } from "@/components/card"
import { Separator } from "@/components/separator"

export const FullBlogSkeleton = () => {
    return (
        <div className="min-h-screen bg-transparent">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Content Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <Card className="mb-8 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white dark:bg-gray-800">
                            <CardContent className="prose dark:prose-invert max-w-none p-8 sm:p-12">
                                <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 mb-6 rounded-lg animate-pulse"></div>
                                <div className="flex space-x-4 mb-8">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse mr-2"></div>
                                        <span className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse mr-2"></div>
                                        <span className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></span>
                                    </div>
                                </div>
                                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-6"></div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8 overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.15)] transition-all duration-300 bg-white dark:bg-gray-800">
                            <CardContent className="p-8">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse mb-4"></div>
                                    <div className="w-24 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mb-2"></div>
                                    <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                </div>
                                <Separator className="my-6" />
                                <div className="w-48 h-8 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse mx-auto"></div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
