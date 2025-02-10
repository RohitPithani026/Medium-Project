export const AppbarSkeleton = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4 animate-pulse">
            {/* Logo Skeleton */}
            <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>

            {/* Right Side - New Button & UserNav Skeleton */}
            <div className="flex items-center">
                {/* Button Skeleton */}
                <div className="h-10 w-20 bg-gray-300 dark:bg-gray-700 rounded-full mr-4"></div>

                {/* UserNav Skeleton */}
                <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
};
