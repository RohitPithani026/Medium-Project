export const ProfilePageSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-8 p-6 max-w-xl mx-auto">

            <header className="text-center space-y-4">
                <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full"></div>
                <div className="h-6 bg-gray-200 rounded-full w-48 mx-auto"></div>
            </header>

            <div className="border border-gray-200 shadow-lg p-6 space-y-6">
                <div className="h-6 bg-gray-200 rounded-full w-32 mb-4"></div>
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full w-48"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-64"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
            </div>

            <div className="border border-gray-200 shadow-lg p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded-full w-40 mb-4"></div>
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full w-56"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-64"></div>
                    <div className="h-10 bg-gray-200 rounded w-36"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
