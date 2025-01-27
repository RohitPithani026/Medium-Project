import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { motion } from "framer-motion"

export const ProfilePageSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-12 p-8 max-w-6xl mx-auto">

            {/* Profile Section */}
            <div className="flex items-center space-x-8 mb-8">
                {/* Avatar Placeholder */}
                <div className="h-32 w-32 rounded-full bg-gray-200"></div>

                <div className="text-left space-y-3 flex-1 pt-6 sm:pt-0">
                    {/* Name Placeholder */}
                    <div className="h-8 bg-gray-200 rounded-full w-72"></div>
                    {/* Email Placeholder */}
                    <div className="h-6 bg-gray-200 rounded-full w-96"></div>
                </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="profile" className="text-lg sm:text-xl h-8 bg-gray-200 rounded-full w-48 mx-auto"></TabsTrigger>
                    <TabsTrigger value="security" className="text-lg sm:text-xl h-8 bg-gray-200 rounded-full w-48 mx-auto"></TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card>
                            {/* Card Header */}
                            <CardHeader className="pb-6">
                                <CardTitle className="text-3xl font-semibold flex items-center justify-between">
                                    <span className="h-8 w-8 bg-gray-200 rounded-full"></span>
                                </CardTitle>
                            </CardHeader>

                            {/* Card Content */}
                            <CardContent>
                                <div className="space-y-6">
                                    {/* Name, Email, Biography Placeholders */}
                                    <div className="space-y-3">
                                        <div className="h-6 bg-gray-200 rounded-full w-32"></div>
                                        <div className="h-6 bg-gray-200 rounded-full w-40"></div>
                                        <div className="h-24 bg-gray-200 rounded-md"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>

                <TabsContent value="security">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card>
                            {/* Card Header */}
                            <CardHeader className="pb-6">
                                <CardTitle className="text-3xl font-semibold flex items-center justify-between">
                                    <span className="h-8 w-8 bg-gray-200 rounded-full"></span>
                                </CardTitle>
                            </CardHeader>

                            {/* Card Content */}
                            <CardContent>
                                <div className="space-y-6">
                                    {/* Current Password, New Password, and Confirm Password Placeholders */}
                                    <div className="space-y-3">
                                        <div className="h-6 bg-gray-200 rounded-full w-72"></div>
                                        <div className="h-6 bg-gray-200 rounded-full w-72"></div>
                                        <div className="h-6 bg-gray-200 rounded-full w-72"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
