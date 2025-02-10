import { Card, CardContent } from "@/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { AppbarSkeleton } from "./AppbarSkeleton"

export const PublishSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 flex flex-col">
            <AppbarSkeleton />
            <div className="flex-1 flex">
                {/* Sidebar Skeleton */}
                <aside className="w-64 bg-white shadow-md p-6 hidden lg:block animate-pulse">
                    <div className="h-6 bg-gray-300 rounded-lg mb-4 w-3/4"></div>
                    <div className="space-y-4">
                        <div>
                            <div className="h-4 bg-gray-300 rounded-lg mb-2 w-1/2"></div>
                            <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                        </div>
                        <div>
                            <div className="h-4 bg-gray-300 rounded-lg mb-2 w-1/3"></div>
                            <div className="h-6 bg-gray-300 rounded-lg w-1/4"></div>
                        </div>
                        <div className="h-10 bg-gray-300 rounded-lg w-full"></div>
                    </div>
                </aside>

                {/* Main Content Skeleton */}
                <main className="flex-1 p-6">
                    <Card className="max-w-4xl mx-auto animate-pulse">
                        <Tabs defaultValue="edit" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="edit" className="h-10 bg-gray-300 rounded-lg"></TabsTrigger>
                                <TabsTrigger value="preview" className="h-10 bg-gray-300 rounded-lg"></TabsTrigger>
                            </TabsList>
                            <TabsContent value="edit">
                                <CardContent className="p-6">
                                    <div className="h-64 bg-gray-300 rounded-lg w-full"></div>
                                </CardContent>
                            </TabsContent>
                            <TabsContent value="preview">
                                <CardContent className="p-6">
                                    <div className="h-6 bg-gray-300 rounded-lg w-1/2 mb-4"></div>
                                    <div className="h-48 bg-gray-300 rounded-lg w-full"></div>
                                </CardContent>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </main>
            </div>
        </div>
    )
}
