import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Trash2, Edit } from "lucide-react";

interface UserBlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    onDelete: (id: number) => void;
    onUpdate: () => void;
}

// Function to ensure images are responsive inside the content
const makeImagesResponsive = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    tempDiv.querySelectorAll("img").forEach((img) => {
        img.classList.add("max-w-full", "h-auto", "rounded-lg"); // Ensures responsiveness
        img.style.objectFit = "cover"; // Prevents distortion
    });

    return tempDiv.innerHTML;
};

export function UserBlogCard({ id, authorName, title, content, publishedDate, onDelete, onUpdate }: UserBlogCardProps) {
    const processedContent = makeImagesResponsive(content);

    return (
        <div className="w-full flex justify-center py-3 sm:py-6 px-3 sm:px-6">
            <Card className="max-w-4xl w-full bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-8 border-b bg-gray-50 rounded-t-lg">
                    <CardTitle className="text-lg sm:text-3xl font-bold text-gray-900">{title}</CardTitle>
                    <p className="text-sm sm:text-lg text-gray-600 mt-1 sm:mt-2">
                        By <span className="font-semibold">{authorName}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">Published on {new Date(publishedDate).toLocaleDateString()}</p>
                </CardHeader>
                {/* Scrollable Blog Content with Responsive Images */}
                <CardContent className="p-4 sm:p-8 text-sm sm:text-lg max-h-60 sm:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedContent }} />
                </CardContent>
                <CardFooter className="p-4 sm:p-8 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-between items-center border-t bg-gray-50 rounded-b-lg">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg" onClick={onUpdate}>
                        <Edit className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                        Edit
                    </Button>
                    <Button variant="destructive" size="lg" className="w-full sm:w-auto flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg" onClick={() => onDelete(id)}>
                        <Trash2 className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
