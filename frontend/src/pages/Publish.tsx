import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Appbar } from "@/components/Appbar"
import { BACKEND_URL } from "@/config"
import { TextEditor } from "@/components/TextEditor"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Card, CardContent } from "@/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"
import { Loader2 } from "lucide-react"
import { PublishSkeleton } from "@/components/PublishSkeleton"

export const Publish = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [isPublishing, setIsPublishing] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const router = useNavigate()

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    const handlePublish = async () => {
        setIsPublishing(true)
        try {
            const response = await axios.post<{ id: string }>(
                `${BACKEND_URL}/api/v1/blog`,
                { title, content },
                {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                    },
                },
            )
            router(`/blog/${response.data.id}`)
        } catch (error) {
            console.error("Failed to publish:", error)
        } finally {
            setIsPublishing(false)
        }
    }

    const wordCount = content.trim().split(/\s+/).length

    if (isLoading) {
        return <PublishSkeleton />
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 flex flex-col">
            <Appbar />
            
            {/* Mobile Sidebar for Blog Details */}
            <div className="block lg:hidden px-4 sm:px-6 py-4 bg-white shadow-md rounded-b-lg">
                <h2 className="text-lg font-semibold mb-3 text-gray-800">Blog Post Details</h2>
                <div className="space-y-3">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your title here..."
                            maxLength={100}
                        />
                        <p className="mt-1 text-xs text-gray-500 text-right">{title.length}/100 characters</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Word Count</p>
                        <p className="text-xl font-bold text-blue-600">{wordCount}</p>
                    </div>
                    <Button onClick={handlePublish} disabled={isPublishing || !title || !content} className="w-full">
                        {isPublishing ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Publishing
                            </>
                        ) : (
                            "Publish post"
                        )}
                    </Button>
                </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row">
                {/* Sidebar for Desktop */}
                <aside className="hidden lg:block w-64 bg-white shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Blog Post Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter your title here..."
                                maxLength={100}
                            />
                            <p className="mt-1 text-sm text-gray-500 text-right">{title.length}/100 characters</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Word Count</p>
                            <p className="text-2xl font-bold text-blue-600">{wordCount}</p>
                        </div>
                        <Button onClick={handlePublish} disabled={isPublishing || !title || !content} className="w-full">
                            {isPublishing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Publishing
                                </>
                            ) : (
                                "Publish post"
                            )}
                        </Button>
                    </div>
                </aside>

                {/* Main Content Section */}
                <main className="flex-1 p-4 sm:p-6">
                    <Card className="max-w-4xl mx-auto">
                        <Tabs defaultValue="edit" className="w-full">
                            <TabsList className="grid grid-cols-2 sm:grid-cols-3 w-full">
                                <TabsTrigger value="edit">Edit</TabsTrigger>
                                <TabsTrigger value="preview">Preview</TabsTrigger>
                            </TabsList>
                            <TabsContent value="edit">
                                <CardContent className="p-4 sm:p-6">
                                    <TextEditor value={content} onChange={setContent} />
                                </CardContent>
                            </TabsContent>
                            <TabsContent value="preview">
                                <CardContent className="p-4 sm:p-6">
                                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h1>
                                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
                                </CardContent>
                            </TabsContent>
                        </Tabs>
                    </Card>
                </main>
            </div>
        </div>
    )
}
