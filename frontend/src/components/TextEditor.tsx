import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        ["link", "image", "video"],
        ["clean"],
    ],
    clipboard: {
        matchVisual: false,
    },
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
];

interface TextEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export function TextEditor({ value, onChange }: TextEditorProps) {
    const [Quill, setQuill] = useState<any>(null);

    useEffect(() => {
        import("react-quill").then((mod) => {
            setQuill(() => mod.default);
        });
    }, []);

    if (!Quill) return null; // Avoid SSR issues

    return (
        <Quill
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            theme="snow"
            placeholder="Write your blog post here..."
            className="h-[calc(100vh-20rem)] overflow-y-auto"
        />
    );
}
