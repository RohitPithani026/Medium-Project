import { useState } from "react"
import type React from "react" 

interface TextEditorProps {
    onChange: (value: string) => void
}

export const TextEditor: React.FC<TextEditorProps> = ({ onChange }) => {
    const [content, setContent] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
        onChange(e.target.value)
    }

    const handleToolbarAction = (action: string) => {
        // Implement toolbar actions here (e.g., bold, italic, etc.)
        console.log(`Action ${action} clicked`)
    }

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm">
            <div className="flex items-center justify-between px-3 py-2 border-b">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-4">
                        {["bold", "italic", "underline"].map((action) => (
                            <button
                                key={action}
                                type="button"
                                onClick={() => handleToolbarAction(action)}
                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <span className="sr-only">{action}</span>
                                <i className={`fas fa-${action}`}></i>
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                        {["link", "image", "video"].map((action) => (
                            <button
                                key={action}
                                type="button"
                                onClick={() => handleToolbarAction(action)}
                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <span className="sr-only">{action}</span>
                                <i className={`fas fa-${action}`}></i>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg">
                <textarea
                    id="editor"
                    rows={8}
                    className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                    placeholder="Write an article..."
                    required
                    value={content}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="flex justify-between items-center px-3 py-2 border-t">
                <div className="flex space-x-1 sm:pr-4">
                    <button
                        type="button"
                        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                    >
                        <span className="sr-only">Attach file</span>
                        <i className="fas fa-paperclip"></i>
                    </button>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-500">{content.length} characters</span>
                </div>
            </div>
        </div>
    )
}

