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
        <div className="w-full flex justify-center py-8">
            <Card className="max-w-5xl w-full bg-white shadow-xl rounded-xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-10 border-b bg-gray-50 rounded-t-xl">
                    <CardTitle className="text-4xl font-bold text-gray-900 leading-snug">{title}</CardTitle>
                    <p className="text-lg text-gray-600 mt-3">
                        By <span className="font-semibold">{authorName}</span>
                    </p>
                    <p className="text-md text-gray-500">Published on {new Date(publishedDate).toLocaleDateString()}</p>
                </CardHeader>
                <CardContent className="p-10 text-lg">
                    <div className="mt-6 prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
                </CardContent>
                <CardFooter className="p-10 flex justify-between items-center border-t bg-gray-50 rounded-b-xl">
                    <Button variant="outline" size="lg" className="flex items-center px-8 py-4 text-xl" onClick={onUpdate}>
                        <Edit className="mr-3 h-6 w-6" />
                        Edit
                    </Button>
                    <Button variant="destructive" size="lg" className="flex items-center px-8 py-4 text-xl" onClick={() => onDelete(id)}>
                        <Trash2 className="mr-3 h-6 w-6" />
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
