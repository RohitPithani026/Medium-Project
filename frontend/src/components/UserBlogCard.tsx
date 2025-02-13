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

export function UserBlogCard({ id, authorName, title, content, publishedDate, onDelete, onUpdate }: UserBlogCardProps) {
    return (
        <div className="w-full flex justify-center py-4 sm:py-8 px-4">
            <Card className="max-w-5xl w-full bg-white shadow-xl rounded-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300 sm:px-6">
                <CardHeader className="p-6 sm:p-10 border-b bg-gray-50 rounded-t-xl">
                    <CardTitle className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug">{title}</CardTitle>
                    <p className="text-md sm:text-lg text-gray-600 mt-2 sm:mt-3">
                        By <span className="font-semibold">{authorName}</span>
                    </p>
                    <p className="text-sm sm:text-md text-gray-500">Published on {new Date(publishedDate).toLocaleDateString()}</p>
                </CardHeader>
                <CardContent className="p-6 sm:p-10 text-md sm:text-lg">
                    <div className="mt-4 sm:mt-6 prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                </CardContent>
                <CardFooter className="p-6 sm:p-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center border-t bg-gray-50 rounded-b-xl">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl" onClick={onUpdate}>
                        <Edit className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                        Edit
                    </Button>
                    <Button variant="destructive" size="lg" className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl" onClick={() => onDelete(id)}>
                        <Trash2 className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
