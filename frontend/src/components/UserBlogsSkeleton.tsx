export const UserBlogSkeleton = () => {
    return (
        <div
            role="status"
            className="group p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent dark:border-gray-700 w-full max-w-screen-md mb-6 mt-4 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
        >
            <div className="flex flex-col space-y-4">
                {/* Header: Skeleton for Avatar, Author Name, and Date */}
                <div className="flex items-center space-x-6 pb-6">
                    <div className="h-14 w-14 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex flex-col space-y-2 flex-grow">
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>
                        <div className="flex items-center space-x-2">
                            <Circle />
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3"></div>
                        </div>
                    </div>
                </div>

                {/* Skeleton for Blog Title */}
                <div>
                    <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>

                    {/* Skeleton for Content */}
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12"></div>
                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-10/12"></div>
                    </div>
                </div>

                {/* Skeleton for Reading Time */}
                <div className="pt-6 flex justify-between">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4"></div>
                </div>

                {/* Skeleton for Buttons */}
                <div className="flex space-x-4 pt-4">
                    <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></div>
                    <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></div>
                </div>
            </div>
        </div>
    );
};


export function Circle() {
    return <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-500"></div>;
}
