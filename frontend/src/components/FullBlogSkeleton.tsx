export const FullBlogSkeleton = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent dark:border-gray-700 w-full max-w-screen-xl mb-6 mt-4">
                    {/* Skeleton Grid */}
                    <div className="grid grid-cols-12 gap-6 animate-pulse">
                        {/* Blog Content Skeleton */}
                        <div className="col-span-8 space-y-4">
                            <div className="h-10 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/2"></div>
                            <div className="space-y-3 pt-4">
                                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
                                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-11/12"></div>
                                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-10/12"></div>
                                <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                            </div>
                        </div>

                        {/* Author Info Skeleton */}
                        <div className="col-span-4">
                            <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
                                    <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
