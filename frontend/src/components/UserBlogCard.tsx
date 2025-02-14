import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Trash2, Edit } from "lucide-react";
import { useEffect, useRef } from "react";

interface UserBlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    onDelete: (id: number) => void;
    onUpdate: () => void;
}

export function UserBlogCard({ id, authorName, title, content, publishedDate, onDelete, onUpdate }: UserBlogCardProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const images = contentRef.current.querySelectorAll("img");
            images.forEach((img) => {
                img.style.width = "100%";  
                img.style.height = "auto"; 
                img.style.maxHeight = "250px"; 
                img.style.borderRadius = "8px";
                img.style.objectFit = "contain"; 
                img.style.display = "block"; 
                img.style.margin = "10px 0"; 
            });
        }
    }, [content]);

    return (
        <div className="w-full flex justify-center py-3 sm:py-6 px-3 sm:px-6">
            <Card className="max-w-3xl w-full bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6 border-b bg-gray-50 rounded-t-lg">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-gray-900">{title}</CardTitle>
                    <p className="text-sm sm:text-md text-gray-600 mt-1 sm:mt-2">
                        By <span className="font-semibold">{authorName}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Published on {new Date(publishedDate).toLocaleDateString()}</p>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 text-sm sm:text-lg max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <div ref={contentRef} className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                </CardContent>

                <CardFooter className="p-4 sm:p-6 flex flex-row justify-between items-center border-t bg-gray-50 rounded-b-lg">
                    <Button variant="outline" size="lg" className="w-1/2 flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg" onClick={onUpdate}>
                        <Edit className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                        Edit
                    </Button>
                    <Button variant="destructive" size="lg" className="w-1/2 flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg" onClick={() => onDelete(id)}>
                        <Trash2 className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
