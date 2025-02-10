import { useState, useEffect } from "react"
import { TextEditor } from "@/components/TextEditor"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/dialog"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import type React from "react" 

interface UpdateBlogModalProps {
    blog: { id: number; title: string; content: string }
    onClose: () => void
    onUpdate: (updatedData: { title: string; content: string }) => void
}

export function UpdateBlogModal({ blog, onClose, onUpdate }: UpdateBlogModalProps) {
    const [title, setTitle] = useState(blog.title)
    const [content, setContent] = useState(blog.content)

    useEffect(() => {
        setTitle(blog.title)
        setContent(blog.content)
    }, [blog])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onUpdate({ title, content })
    }

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Update Blog</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content
                        </label>
                        <TextEditor value={content} onChange={setContent} />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">Update Blog</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
